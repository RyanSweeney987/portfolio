<script setup lang="ts">
	import { useRouter } from 'vue-router';
	import Icon from "../icons/Icon.vue";
	import Card from "../../components/Card.vue";

	import { useWorkStore } from "@/stores/WorkStore";
	import { useSkillStore } from "@/stores/SkillStore";

	import { toMonthYearstr, getSpanYearsStr } from '@/utils/utils';


	const workStore = useWorkStore();
	const skillStore = useSkillStore();

	const router = useRouter();

	const props = defineProps<{
		bgCol: string,
		ids?: number[]
	}>()

	function clicked(slug: string) {
		router.push(`/work/${slug}`);
		router.push({name: "work", params: {slug: slug}});
	}

	function filteredWorkExp() {
		if(props.ids !== undefined && props.ids.length > 0) {
			return workStore.works.filter(_ => props.ids?.includes(_.id));
		} else {
			return workStore.works;
		}
	}

	function getYearsWorked(startDate: string, endDate: any): string {
		if(endDate === undefined) {
			return "Invalid End Date";
		}

		return getSpanYearsStr(startDate, endDate) + " years";
	}
</script>

<template>
	<div class="w-full flex flex-wrap work-experience">
		<div class="p-1 sm:w-1/2 lg:w-1/3 2xl:w-1/4" v-for="(work, index) in filteredWorkExp()">
			<Card :class="bgCol" @on-click="clicked(work.slug)">
				<template v-slot:card-image>
					<img class="with-background" :src="`/portfolio/thumbs/workexp/${work.imgSrc}`" :alt="work.imgAlt"/>
				</template>
				<template v-slot:card-header>
					<div class="flex justify-between">
						<h4 class="work-name">{{work.name}}</h4>
						<h4 class="work-time" v-if="work.isCurrent">Current</h4>
						<h4 class="work-time" v-else>{{getYearsWorked(work.startDate, work.endDate)}}</h4>
					</div>
				</template>
				<template v-slot:card-body>
					<p>{{work.workTitle}} - {{work.shortDesc}}</p>
				</template>
				<template v-slot:card-footer>
					<div class="lang-icon-container w-full overflow-x-scroll h-full">
						<div class="w-0 flex overflow-visible">
							<Icon class="mx-1" v-for="(skill, index) in skillStore.skills.filter(_ => work.skillIds.includes(_.id))" :icon-name="skill.icon"/>
						</div>
					</div>
				</template>
			</Card>
		</div>
	</div>
</template>

<style scoped>
	@tailwind components;
	
	@layer components {
		.work-name {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			@apply font-bold text-left flex-1;
		}

		.work-time {
			@apply text-right flex-none pl-2;
		}
	}
</style>

<style>
	.lang-icon-container {
		overflow-y: hidden;
		overflow-x: auto;
		scroll-behavior: auto;
	}

	.work-experience .icon-container .icon {
		width: 2rem;
		height: 2rem;
	}
</style>