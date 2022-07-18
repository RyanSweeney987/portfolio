<script setup lang="ts">
	import { useRoute } from 'vue-router';
	import { useProjectStore } from '@/stores/ProjectStore';
	import { useContentStore } from '@/stores/ContentStore';
	import { computed } from '@vue/reactivity';
	import Profile from '../components/Profile.vue';
	import MarkdownRenderer from '../components/MarkdownRenderer.vue';

	const props = defineProps<{
		slug: string
	}>();

	const projectStore = useProjectStore();
	const contentStore = useContentStore();

	const project = projectStore.projects.find(_ => _.slug === props.slug);

	const projectName = computed(_ => {
		return project !== undefined ? project.name : "project not found";
	});
	const projectId = computed(_ => {
		return project !== undefined ? project.id : -1;
	});
</script>

<template>
	<h1 class="w-full text-center">This page will display further information about the project <span class="text-4xl font-bold italic">{{ projectName }}</span>.</h1>
	<h1 class="w-full text-center">This will include links to skills used in the project.</h1>
	<h1>{{projectId}}</h1>
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