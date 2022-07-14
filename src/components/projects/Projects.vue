<script setup lang="ts">
import Icon from "../icons/Icon.vue";
import Card from "../../components/Card.vue";

import { useProjectStore } from "@/stores/ProjectStore";
import { useSkillStore } from "@/stores/SkillStore";

const projectStore = useProjectStore();
const skillStore = useSkillStore();

defineProps<{
	bgCol: string
}>()

const data = [];

function clicked(lang: string) {
	console.log("Clicked B - " + lang);
}
</script>

<template>
	<div class="w-full flex flex-wrap projects">
		<Card class="sm:w-1/2 lg:w-1/3 2xl:w-1/4" v-for="(project, index) in projectStore.projects" :bg-col="bgCol" @on-click="clicked(project.slug)">
			<template v-slot:card-image>
				<img :src="`/thumbs/projects/${project.imgSrc}`" :alt="project.imgAlt"/>
			</template>
			<template v-slot:card-header>
				<h4>{{project.name}}</h4>
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

		<!-- <Card class="sm:w-1/2 lg:w-1/3 2xl:w-1/4" :bg-col="bgCol" @on-click="clicked('City Generator')">
			<template v-slot:card-image>
				<img class="" src="../../assets/projects/city_gen_thumb.png" alt="Thumbnail of City Generator project made in Unity."/>
			</template>
			<template v-slot:card-header>
				<h4>City Generator</h4>
			</template>
			<template v-slot:card-body>
				<p>Procedural city generator made with the Unity game engine.</p>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-full">
					<Icon class="mx-1" icon-name="Unity"/>
					<Icon class="mx-1" icon-name="CSharp"/>
				</div>
			</template>
		</Card>
		<Card class="sm:w-1/2 lg:w-1/3 2xl:w-1/4" :bg-col="bgCol" @on-click="clicked('Underwater Cave')">
			<template v-slot:card-image>
				<img class="with-background" src="../../assets/projects/underwater_thumb.png" alt="Thumbnail of Unerwater Cave project made in Unity."/>
			</template>
			<template v-slot:card-header>
				<h4>Underwater Cave</h4>
			</template>
			<template v-slot:card-body>
				<p>Underwater cave scene made with the Unreal Engine 4.</p>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-full">
					<Icon class="mx-1" icon-name="UnrealEngine"/>
					<Icon class="mx-1" icon-name="CPlusPlus"/>
				</div>
			</template>
		</Card>
		<Card class="sm:w-1/2 lg:w-1/3 2xl:w-1/4" :bg-col="bgCol" @on-click="clicked('Asteroid Miner')">
			<template v-slot:card-image>
				<img class="with-background" src="../../assets/projects/asteroid_miner_thumb.png" alt="Thumbnail of Asteroid project made in Unity."/>
			</template>
			<template v-slot:card-header>
				<h4>Asteroid Miner</h4>
			</template>
			<template v-slot:card-body>
				<p>Small game made in Unity as part of my concept developement module.</p>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-full">
					<Icon class="mx-1" icon-name="Unity"/>
					<Icon class="mx-1" icon-name="CSharp"/>
				</div>
			</template>
		</Card>
		<Card class="sm:w-1/2 lg:w-1/3 2xl:w-1/4" :bg-col="bgCol" @on-click="clicked('Asteroids Clone')">
			<template v-slot:card-image>
				<img class="with-background" src="../../assets/projects/asteroids_clone_thumb.png" alt="Thumbnail of Asteroids Clone project made in C++ using SDL."/>
			</template>
			<template v-slot:card-header>
				<h4>Asteroids Clone</h4>
			</template>
			<template v-slot:card-body>
				<p>Small game made in C++ using SDL as part of my game programming module.</p>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-full">
					<Icon class="mx-1" icon-name="SDL"/>
					<Icon class="mx-1" icon-name="CPlusPlus"/>
				</div>
			</template>
		</Card>
		<Card class="sm:w-1/2 lg:w-1/3 2xl:w-1/4" :bg-col="bgCol" @on-click="clicked('Bulls and Cows')">
			<template v-slot:card-image>
				<img class="with-background" src="../../assets/projects/bulls_and_cows_thumb.png" alt="Thumbnail of Bulls and Cows project made in C++."/>
			</template>
			<template v-slot:card-header>
				<h4>Bulls and Cows</h4>
			</template>
			<template v-slot:card-body>
				<p>My first foray into C++ development.</p>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-full">
					<Icon class="mx-1" icon-name="CPlusPlus"/>
				</div>
			</template>
		</Card> -->
	</div>
</template>

<style scoped>
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