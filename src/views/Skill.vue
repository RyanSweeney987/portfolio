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

	const props = defineProps<{
		slug: string
	}>();

	const skillStore = useSkillStore();

	const skill = skillStore.skills.find(_ => _.slug === props.slug);

	const skillName = computed(_ => {
		return skill !== undefined ? skill.name : "error";
	});
	const skillId = computed(_ => {
		return skill !== undefined ? skill.id : -1;
	});

	function filterSkill(_: Work|Project) {
		return _.skillIds.includes(skillId.value);
	}
</script>

<template>
	<Profile>
		<template #profile-media>
			<Icon v-if="skill !== undefined" :icon-name="skill?.icon"/>
		</template>
		<template #profile-title>
			<h1>{{ skillName }}</h1>
		</template>
		<template #profile-body>
			<div v-if="true">
				<!-- Check work experience and projects for this skill -->
				<!-- Display respective cards cards -->
				<ContentSection bg-svg="background-pattern-3" class="background-3">
					<template #content>
						<WorkExperience bg-col="background-hover-3" :filter="filterSkill"/>
					</template>
				</ContentSection>
				<ContentSection bg-svg="background-pattern-4" class="background-4">
					<template #content>
						<Projects bg-col="background-hover-4" :filter="filterSkill"/>
					</template>
				</ContentSection>
			</div>
			<div v-else>
				<h2>No work experience or projects available to highlight the use of {{ skillName }}.</h2>
			</div>
		</template>
	</Profile>
</template>