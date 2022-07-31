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
	import { ContentType } from '@/enums/ContentTypeEnum';
	import type { Media } from '@/types/Media';
	import { toMonthYearstr } from '@/utils/utils';

	const modules = [Navigation, Pagination, Scrollbar, A11y, Virtual];

	const props = defineProps<{
		slug: string
	}>();

	const router = useRouter();
	const route = useRoute();

	const workStore = useWorkStore();
	const skillStore = useSkillStore();
	const contentStore = useContentStore();

	const work = workStore.getWorkBySlug(props.slug);
	const content = work !== undefined ? contentStore.getContentById(ContentType.Work, work.id) : undefined;

	const imgContent = content?.media.filter(_ => _.typeId === MediaType.Image);

	const workName = computed(_ => {
		return work !== undefined ? work.name : "Name Not Found";
	});
	const workStartDate = computed(_ => {
		return work !== undefined ? toMonthYearstr(work.startDate) : "Start Date Not Found"
	});
	const workEndDate = computed(_ => {
		let dateString = "";
		
		if(work !== undefined) {
			if(work.endDate !== undefined) {
				dateString = toMonthYearstr(work.endDate);
			} else {
				dateString = "End Date Note Found";
			}
		} else {
			dateString = "End Date Note Found";
		}

		return dateString;
	});

	function clicked(slug: string) {
		router.push({name: "skill", params: {slug}});
	}

	function isMedia(item: Media) {
		return item.typeId === MediaType.Image || item.typeId === MediaType.YouTube || item.typeId === MediaType.YouTubeShort;
	}
</script>

<template>
	<Profile class="work-profile" v-if="work !== undefined">
		<template #profile-media>
			<div class="w-full flex justify-center">
				<div class="w-full md:w-4/5">
					<Swiper :modules="modules" :slides-per-view="1" :space-between="20" navigation :pagination="{ clickable: true }" :autoplay="{delay: 2500, disableOnInteraction: false }">
						<SwiperSlide v-for="(media, index) in content?.media.filter(isMedia)" >
							<div class="swiper-content-container" v-if="media.typeId === MediaType.Image">
								<img :src="`${content?.contentDir}${media.source}`" :alt="media.alt"/>
							</div>
							<!-- <div class="swiper-content-container" v-else-if="media.typeId === MediaType.YouTube">
								<iframe width="344" height="611" :src="`https://www.youtube.com/embed/${media.source}`" :title="media.alt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div> -->
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</template>
		<template #profile-title>
			<h1>{{workName}}</h1>
			<h2 class="mb-2">Title: {{ work?.workTitle }}</h2>
			<h2 class="mb-2">Dates: {{ workStartDate }} - {{ workEndDate }}</h2>
		</template>
		<template #profile-body>
			<MarkdownRenderer v-if="content !== undefined" :markdown="content.content" class="mb-4 header-margin"></MarkdownRenderer>
			<h2>Skills</h2>
			<div class="flex flex-wrap w-full">
				<SkillGroup>
					<IconButton class="m-1" :class="(route.meta.bgHover as string)" v-for="(skill, index) in skillStore.skills.filter(_ => work?.skillIds.find(__ => __ === _.id) !== undefined)" :key="skill.id" :icon-name="skill.icon" @on-click="clicked(skill.slug)"/>
				</SkillGroup>
			</div>
		</template>
	</Profile>
	<div v-else>
		<h2>Work Not Found!</h2>
	</div>
</template>

<style>
	@tailwind components;
	
	@layer components {
		/* .work-profile .profile-media {
			@apply flex justify-center;
		} */
	}
</style>