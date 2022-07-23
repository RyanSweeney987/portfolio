<script setup lang="ts">
	import { useRoute, useRouter } from 'vue-router';
	import { useProjectStore } from '@/stores/ProjectStore';
	import { useSkillStore } from '@/stores/SkillStore';
	import { useContentStore } from '@/stores/ContentStore';
	import { computed } from '@vue/reactivity';
	import Profile from '@/components/Profile.vue';
	import IconButton from '@/components/icons/IconButton.vue';
	import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
	import SkillGroup from '../components/skills/SkillGroup.vue';

  	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Navigation, Pagination, Scrollbar, A11y, Virtual  } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/navigation';
  	import 'swiper/css/pagination';

	import { MediaType } from '@/enums/MediaTypeEnum';

	const modules = [Navigation, Pagination, Scrollbar, A11y, Virtual];

	const router = useRouter();
	const route = useRoute();

	const props = defineProps<{
		slug: string
	}>();

	const projectStore = useProjectStore();
	const skillStore = useSkillStore();
	const contentStore = useContentStore();

	const project = projectStore.projects.find(_ => _.slug === props.slug);
	const content = contentStore.projectContent.find(_ => _.projectId === project?.id);

	const imgContent = content?.media.filter(_ => _.typeId === MediaType.Image);
	const youtubeContent = content?.media.filter(_ => _.typeId === MediaType.YouTube);
	const gitHubLink = content?.media.find(_ => _.typeId === MediaType.GitHub);

	imgContent?.forEach(element => {
		console.log(element);
	});
	youtubeContent?.forEach(element => {
		console.log(element);
	});
	console.log(imgContent?.flat());
	console.log(youtubeContent?.flat());
	console.log(gitHubLink);


	const projectName = computed(_ => {
		return project !== undefined ? project.name : "project not found";
	});
	const projectId = computed(_ => {
		return project !== undefined ? project.id : -1;
	});
	const projectMarkdown = computed(_ => {
		return contentStore.projectContent.find(_ => _.projectId === projectId.value)?.content;
	});

	function clicked(slug: string) {
		router.push({name: "skill", params: {slug}});
	}
</script>

<template>
	<Profile class="project-profile">
		<template #profile-media>
			<div class="w-full">
				<Swiper :modules="modules" :slides-per-view="1" :space-between="20" navigation :pagination="{ clickable: true }">
					<SwiperSlide v-for="(media, index) in content?.media.filter(_ => _.typeId === MediaType.Image || _.typeId === MediaType.YouTube)">
						<di>{{index}}</di>
						<!-- <div v-if="media.typeId === MediaType.Image">{{index}}</div> -->
					</SwiperSlide>
				</Swiper>
			</div>
		</template>
		<template #profile-title>
			<h1>{{projectName}}</h1>
		</template>
		<template #profile-body>
			<MarkdownRenderer v-if="projectMarkdown !== undefined" :markdown="projectMarkdown"></MarkdownRenderer>
			<h2>Skills</h2>
			<div class="flex flex-wrap w-full">
				<SkillGroup>
					<IconButton class="m-1" v-for="(skill, index) in skillStore.skills.filter(_ => project?.skillIds.find(__ => __ === _.id) !== undefined)" :key="skill.id" :bg-col="(route.meta.bgHover as string)" :icon-name="skill.icon" @on-click="clicked(skill.slug)"/>
				</SkillGroup>
			</div>
		</template>
	</Profile>
</template>

<style>
	@tailwind components;
	
	@layer components {

	}
</style>