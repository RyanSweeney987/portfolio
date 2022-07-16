<script setup lang="ts">
	import { useRoute } from 'vue-router';
	import { useSkillStore } from '@/stores/SkillStore';
	import { computed } from '@vue/reactivity';
	import Profile from '../components/Profile.vue';

	const route = useRoute();
	const skillStore = useSkillStore();

	const skill = skillStore.skills.find(_ => _.slug === route.params.slug);

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
		<template #profile-image>
			<!-- Carousel -->
		</template>
		<template #profile-title>
			<!-- Title -->
		</template>
		<template #profile-body>
			<!-- Body content -->
		</template>
	</Profile>
</template>