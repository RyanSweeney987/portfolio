<script setup lang="ts">
	import { useRoute, useRouter } from 'vue-router';
	import { useWorkStore } from '@/stores/WorkStore';
	import { useSkillStore } from "@/stores/SkillStore";
	import { useContentStore } from '@/stores/ContentStore';
	import { computed } from '@vue/reactivity';
	import Profile from '@/components/Profile.vue';
	import IconButton from '@/components/icons/IconButton.vue';
	import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import SkillGroup from '../components/skills/SkillGroup.vue';

	const props = defineProps<{
		slug: string
	}>();

	const router = useRouter();
	const route = useRoute();

	const workStore = useWorkStore();
	const skillStore = useSkillStore();
	const contentStore = useContentStore();

	const work = workStore.workexp.find(_ => _.slug === props.slug);

	const workName = computed(_ => {
		return work !== undefined ? work.name : "error";
	});
	const workId = computed(_ => {
		return work !== undefined ? work.id : -1;
	});
	const workMarkdown = computed(_ => {
		return contentStore.workExpContent.find(_ => _.workExpId === workId.value)?.content;
	});

	function clicked(slug: string) {
		router.push({name: "skill", params: {slug}});
	}
</script>

<template>
	<Profile class="work-container">
		<template #profile-image>
			<!-- Carousel -->
		</template>
		<template #profile-title>
			<h1>{{workName}}</h1>
		</template>
		<template #profile-body>
			<p class="text-white font-bold mb-2">Title: {{ work?.workTitle }}</p>
			<p class="text-white font-bold mb-2">Date: {{work?.startDate}} - {{ work?.endDate }}</p>
			<MarkdownRenderer v-if="workMarkdown !== undefined" :markdown="workMarkdown"></MarkdownRenderer>
			<h2>Skills</h2>
			<div class="flex flex-wrap w-full">
				<SkillGroup>
					<IconButton class="m-1" v-for="(skill, index) in skillStore.skills.filter(_ => work?.skillIds.find(__ => __ === _.id) !== undefined)" :key="skill.id" :bg-col="route.meta.bgHover" :icon-name="skill.icon" @on-click="clicked(skill.slug)"/>
				</SkillGroup>
			</div>
		</template>
	</Profile>
</template>

<style>
</style>