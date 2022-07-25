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

	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Navigation, Pagination, Scrollbar, A11y, Virtual  } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/navigation';
  	import 'swiper/css/pagination';

	import { MediaType } from '@/enums/MediaTypeEnum';

	const modules = [Navigation, Pagination, Scrollbar, A11y, Virtual];

	const props = defineProps<{
		slug: string
	}>();

	const router = useRouter();
	const route = useRoute();

	const workStore = useWorkStore();
	const skillStore = useSkillStore();
	const contentStore = useContentStore();

	const work = workStore.workexp.find(_ => _.slug === props.slug);
	const content = contentStore.workExpContent.find(_ => _.workExpId === work?.id);

	const imgContent = content?.media.filter(_ => _.typeId === MediaType.Image);

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
	<Profile class="work-profile">
		<template #profile-media>
			<div class="w-full">
				<Swiper :modules="modules" :slides-per-view="1" :space-between="20" navigation :pagination="{ clickable: true }" :autoplay="{delay: 2500, disableOnInteraction: false }">
					<SwiperSlide v-for="(media, index) in content?.media.filter(_ => _.typeId === MediaType.Image || _.typeId === MediaType.YouTube)" >
						<div class="swiper-content-container" v-if="media.typeId === MediaType.Image">
							<img :src="`${content?.contentDir}${media.source}`" :alt="media.alt"/>
						</div>
						<div class="swiper-content-container" v-else-if="media.typeId === MediaType.YouTube">
							<iframe width="344" height="611" :src="`https://www.youtube.com/embed/${media.source}`" :title="media.alt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
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
					<IconButton class="m-1" :class="(route.meta.bgHover as string)" v-for="(skill, index) in skillStore.skills.filter(_ => work?.skillIds.find(__ => __ === _.id) !== undefined)" :key="skill.id" :icon-name="skill.icon" @on-click="clicked(skill.slug)"/>
				</SkillGroup>
			</div>
		</template>
	</Profile>
</template>

<style>
	@tailwind components;
	
	@layer components {
		/* .work-profile .profile-media {
			@apply flex justify-center;
		} */
	}
</style>