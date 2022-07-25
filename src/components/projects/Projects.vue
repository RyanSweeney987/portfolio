<script setup lang="ts">
import { useRouter } from 'vue-router';
import Icon from "../icons/Icon.vue";
import Card from "../../components/Card.vue";

import { useProjectStore } from "@/stores/ProjectStore";
import { useSkillStore } from "@/stores/SkillStore";

const projectStore = useProjectStore();
const skillStore = useSkillStore();

const router = useRouter();

defineProps<{
	bgCol: string
}>()

function clicked(slug: string) {
	router.push({name: "project", params: {slug: slug}});
}
</script>

<template>
	<div class="w-full flex flex-wrap projects">
		<div class="p-1 sm:w-1/2 lg:w-1/3 2xl:w-1/4" v-for="(project, index) in projectStore.projects">
			<Card :class="bgCol" @on-click="clicked(project.slug)">
				<template v-slot:card-image>
					<img :src="`/portfolio/thumbs/projects/${project.imgSrc}`" :alt="project.imgAlt"/>
				</template>
				<template v-slot:card-header>
					<h4 :title="project.name">{{project.name}}</h4>
				</template>
				<template v-slot:card-body>
					<p>{{project.shortDesc}}</p>
				</template>
				<template v-slot:card-footer>
					<div class="flex lang-icon-container w-full">
						<Icon class="mx-1" v-for="(skill, index) in skillStore.skills.filter(_ => project.skillIds.includes(_.id))" :icon-name="skill.icon"/>
					</div>
				</template>
			</Card>
		</div>
	</div>
</template>

<style scoped>
	.card-header h4 {
		width: 100%;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-body p {
		height: 3rem;
		width: 100%;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>

<style>
	.projects  .icon-container .icon {
		width: 2rem;
		height: 2rem;
	}
</style>