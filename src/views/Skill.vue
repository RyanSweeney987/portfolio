<script setup lang="ts">
	import { useRoute } from 'vue-router';
	import { useSkillStore } from '@/stores/SkillStore';
	import { computed } from '@vue/reactivity';
	import Profile from '../components/Profile.vue';
	import ContentSection from "../components/ContentSection.vue";
	import WorkExperience from "../components/workexp/WorkExperience.vue";
	import Projects from "../components/projects/Projects.vue";
	import type { Skill } from '@/types/Skill';
	import type { Work } from '@/types/Work';
	import type { Project } from '@/types/Project';
	import Icon from '../components/icons/Icon.vue';
	import { useWorkStore } from '@/stores/WorkStore';
	import { useProjectStore } from '@/stores/ProjectStore';

	const props = defineProps<{
		slug: string
	}>();

	const route = useRoute();

	const skillStore = useSkillStore();
	const workStore = useWorkStore();
	const projectStore = useProjectStore();

	const skill = skillStore.skills.find(_ => _.slug === props.slug);

	const skillName = computed(_ => {
		return skill !== undefined ? skill.name : "error";
	});
	const skillId = computed(_ => {
		return skill !== undefined ? skill.id : -1;
	});
	const workIds = computed(_ => {
		return workStore !== undefined ? workStore.getWorksBySkill(skillId.value).map(_ => _.id) : [];
	});
	const projectIds = computed(_ => {
		return projectStore !== undefined ? projectStore.getProjectsBySkill(skillId.value).map(_ => _.id) : [];
	});
</script>

<template>
	<Profile v-if="skill !== undefined" class="skill-profile">
		<template #profile-media>
		</template>
		<template #profile-title>
			<div class="flex justify-center w-full mb-4" >
				<div class="rounded-sm" :class="(route.meta.bg as string)">
					<Icon class="skill-icon" :icon-name="skill?.icon"/>
				</div>
			</div>
			<div class="flex justify-center w-full" v-if="workIds.length > 0 || projectIds.length > 0">
				<p class="text-xl mb-4 text-justify md:text-center md:w-2/3">I have had <span class="font-bold text-white">{{workIds.length}}</span> job/s where I've used this and I have used it in <span class="font-bold text-white">{{ projectIds.length }}</span> projects. These can be found bellow.</p>
			</div>
			<div v-else class="w-full">
				<p class="text-xl w-full text-center">I've had no work experience or projects available to highlight the use of {{ skillName }}.</p>
			</div>
		</template>
		<template #profile-body v-if="workIds.length > 0 || projectIds.length > 0">
			<ContentSection bg-svg="background-pattern-3" class="background-3">
				<template #content v-if="workIds.length > 0">
					<WorkExperience bg-col="background-hover-3" :ids="workIds"/>
				</template>
				<template #content v-else>
					<div class="h-80">
						<div class="h-full flex justify-center items-center">
							<h1 class="h-0">No Work Found</h1>
						</div>
					</div>
				</template>
			</ContentSection>
			<ContentSection bg-svg="background-pattern-4" class="background-4">
				<template #content v-if="projectIds.length > 0">
					<Projects bg-col="background-hover-4" :ids="projectIds"/>
				</template>
				<template #content v-else>
					<div class="h-80">
						<div class="h-full flex justify-center items-center">
							<h1 class="h-0">No Projects Found</h1>
						</div>
					</div>
				</template>
			</ContentSection>
		</template>
	</Profile>
	<div v-else>
		<h2>Skill Not Found!</h2>
	</div>
</template>

<style>
	@tailwind components;
	
	@layer components {
		.skill-profile.profile {
			
		}
	}

	.skill-icon {
		width: 100%;
		height: 100%;
		max-width: 10rem;
		max-height: 10rem;
	}

	.skill-icon svg * {
		fill: white;
	}
</style>