<script setup lang="ts">
	import { useRoute } from 'vue-router';
	import { useWorkStore } from '@/stores/WorkStore';
	import { useContentStore } from '@/stores/ContentStore';
	import { computed } from '@vue/reactivity';
	import Profile from '../components/Profile.vue';
	import MarkdownRenderer from '../components/MarkdownRenderer.vue';
	
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
	const workMarkdown = computed(_ => {
		return contentStore.workExpContent.find(_ => _.workExpId === workId.value)?.content;
	});
</script>

<template>
	<Profile>
		<template #profile-image>
			<!-- Carousel -->
		</template>
		<template #profile-title>
			<h1>{{workName}}</h1>
		</template>
		<template #profile-body>
			<MarkdownRenderer v-if="workMarkdown !== undefined" :markdown="workMarkdown"></MarkdownRenderer>
		</template>
	</Profile>
</template>