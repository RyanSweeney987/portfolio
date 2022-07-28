<script setup lang="ts">
	import { useRoute } from 'vue-router';
	import { useSkillStore } from '@/stores/SkillStore';
	import { computed } from '@vue/reactivity';
	import Profile from '../components/Profile.vue';

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
</script>

<template>
	<h1 class="w-full text-center">This page will display further information about the skill <span class="text-4xl font-bold italic">{{ skillName }}</span>.</h1>
	<h1 class="w-full text-center">This will include links to projects and work that include this skill.</h1>

	<h1>{{skillId}}</h1>
	<Profile>
		<template #profile-title>
			<h1>{{ skillName }}</h1>
		</template>
		<template #profile-body>
			<div v-if="true">
				<!-- Check work experience and projects for this skill -->
				<!-- Display respective cards cards -->
			</div>
			<div v-else>
				<h2>No work experience or projects available to highlight the use of {{ skillName }}.</h2>
			</div>
		</template>
	</Profile>
</template>