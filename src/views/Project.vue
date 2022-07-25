<script setup lang="ts">
	import { useRoute, useRouter } from 'vue-router';
	import { useProjectStore } from '@/stores/ProjectStore';
	import { useSkillStore } from '@/stores/SkillStore';
	import { useContentStore } from '@/stores/ContentStore';
	import { computed } from '@vue/reactivity';
	import Profile from '@/components/Profile.vue';
	import IconButton from '@/components/icons/IconButton.vue';
	import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
	import SkillGroup from '@/components/skills/SkillGroup.vue';
	import IconLink from "@/components/icons/IconLink.vue";
	import Icon from "@/components/icons/Icon.vue";


  	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Navigation, Pagination, Scrollbar, A11y, Virtual  } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/navigation';
  	import 'swiper/css/pagination';

	import { MediaType } from '@/enums/MediaTypeEnum';
import type { Media } from '@/types/Media';

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

	function isMedia(item: Media) {
		return item.typeId === MediaType.Image || item.typeId === MediaType.YouTube || item.typeId === MediaType.YouTubeShort;
	}
</script>

<template>
	<Profile class="project-profile">
		<template #profile-media>
			<div class="w-full flex justify-center">
				<div class="w-full md:w-4/5">
					<Swiper :modules="modules" :slides-per-view="1" :space-between="20" :pagination="{ clickable: true }" :autoplay="{delay: 2500, disableOnInteraction: false }">
						<SwiperSlide v-for="(media, index) in content?.media.filter(isMedia)" >
							<div class="swiper-content-container" v-if="media.typeId === MediaType.Image">
								<img :src="`${content?.contentDir}${media.source}`" :alt="media.alt"/>
							</div>
							<div class="swiper-content-container" v-else-if="media.typeId === MediaType.YouTube">
								<iframe width="1519" height="auto" :src="`https://www.youtube.com/embed/${media.source}`" :title="media.alt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
							<div class="swiper-content-container" v-else-if="media.typeId === MediaType.YouTubeShort">
								<iframe width="321" height="auto" :src="`https://www.youtube.com/embed/${media.source}`" :title="media.alt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</template>
		<template #profile-title>
			<h1>{{projectName}}</h1>
		</template>
		<template #profile-body>
			<MarkdownRenderer v-if="projectMarkdown !== undefined" :markdown="projectMarkdown"></MarkdownRenderer>
			<div class="flex">
				<IconLink v-if="gitHubLink !== undefined" class="mx-1" :class="(route.meta.bgHover as string)" :link="gitHubLink.source" :title="gitHubLink.alt" icon-name="GitHub"></IconLink>
			</div>
			<h2>Skills</h2>
			<div class="flex flex-wrap w-full">
				<SkillGroup>
					<IconButton class="m-1" :class="(route.meta.bgHover as string)" v-for="(skill, index) in skillStore.skills.filter(_ => project?.skillIds.find(__ => __ === _.id) !== undefined)" :key="skill.id" :icon-name="skill.icon" @on-click="clicked(skill.slug)"/>
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