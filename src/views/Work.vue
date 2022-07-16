<script setup lang="ts">
	import { useRoute } from 'vue-router';
	import { useWorkStore } from '@/stores/WorkStore';
	import { useContentStore } from '@/stores/ContentStore';
	import { computed } from '@vue/reactivity';
	import Profile from '../components/Profile.vue';
	
	const route = useRoute()
	const workStore = useWorkStore();
	const contentStore = useContentStore();

	const work = workStore.workexp.find(_ => _.slug === route.params.slug);

	const workName = computed(_ => {
		return work !== undefined ? work.name : "error";
	});
	const workId = computed(_ => {
		return work !== undefined ? work.id : -1;
	});
</script>

<template>
	<h1 class="w-full text-center">This page will display further information about the work at <span class="text-4xl font-bold italic">{{ workName }}</span>.</h1>
	<h1 class="w-full text-center">This will include links to skills used in the work.</h1>
	<h1>{{workId}}</h1>
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