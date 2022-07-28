<script setup lang="ts">
import { useRouter } from 'vue-router';
import Icon from "../icons/Icon.vue";
import Card from "../../components/Card.vue";

import { useWorkStore } from "@/stores/WorkStore";
import { useSkillStore } from "@/stores/SkillStore";

const workStore = useWorkStore();
const skillStore = useSkillStore();

const router = useRouter();

const props = defineProps<{
	bgCol: string,
	filter?: Function
}>()

function clicked(slug: string) {
	router.push(`/work/${slug}`);
	router.push({name: "work", params: {slug: slug}});
}

function filteredWorkExp() {
	if(props.filter !== undefined) {
		return workStore.works.filter(props.filter as any);
	} else {
		return workStore.works;
	}
}
</script>

<template>
	<div class="w-full flex flex-wrap work-experience">
		<Card class="m-1 sm:w-1/2 lg:w-1/3 2xl:w-1/4" :class="bgCol" v-for="(work, index) in filteredWorkExp()"  @on-click="clicked(work.slug)">
			<template v-slot:card-image>
				<img class="with-background" :src="`/portfolio/thumbs/workexp/${work.imgSrc}`" :alt="work.imgAlt"/>
			</template>
			<template v-slot:card-header>
				<div class="flex justify-between">
					<h4 class="text-l font-bold text-left">{{work.name}}</h4>
					<h4 class="text-l text-right">{{work.startDate}} - {{work.endDate}}</h4>
				</div>
			</template>
			<template v-slot:card-body>
				<div class="flex justify-between w-full">
					<label class="font-bold">Title:</label>
					<p>{{work.workTitle}}</p>
				</div>
				<p>{{work.shortDesc}}</p>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-full overflow-x-scroll">
					<Icon class="mx-1" v-for="(skill, index) in skillStore.skills.filter(_ => work.skillIds.includes(_.id))" :icon-name="skill.icon"/>
				</div>
			</template>
		</Card>
	</div>
</template>

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