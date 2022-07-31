<script setup lang="ts">
	import SkillGroup from "./SkillGroup.vue";
	import IconButton from "../icons/IconButton.vue";

	import { useRouter } from 'vue-router'
	import { useSkillStore } from "@/stores/SkillStore";

	import { SkillLevelEnum } from "@/enums/SkillLevelEnum";

	const router = useRouter();
	const skillStore = useSkillStore();

	const skillLevels = Object.keys(SkillLevelEnum)
	.filter((v) => isNaN(Number(v)))
	.map((name) => {
		return {
			id: SkillLevelEnum[name as keyof typeof SkillLevelEnum],
			name,
		};
	});

	defineProps<{
		bgCol: string
	}>()

	function clicked(slug: string) {
		router.push({name: "skill", params: {slug}});
	}
</script>

<template>
	<div class="w-full md:flex md:flex-wrap">
		<div class="skill-group-container" v-for="(level, index) in skillLevels">
			<SkillGroup :title="level.name">
				<IconButton class="m-1" :class="bgCol" v-for="(skill, index) in skillStore.skills.filter(_ => _.skillLevelId === level.id)" :key="skill.id" :icon-name="skill.icon" @on-click="clicked(skill.slug)"/>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Portfolio Made With">
				<IconButton class="m-1" :class="bgCol" @on-click="clicked('vuejs')"  icon-name="VueJS"/>
				<IconButton class="m-1" :class="bgCol" @on-click="clicked('html')" icon-name="HTML"/>
				<IconButton class="m-1" :class="bgCol" @on-click="clicked('typescript')" icon-name="Typescript"/>
				<IconButton class="m-1" :class="bgCol" @on-click="clicked('css')" icon-name="CSS"/>
				<IconButton class="m-1" :class="bgCol" @on-click="clicked('tailwind')" icon-name="Tailwind"/>
			</SkillGroup>
		</div>
	</div>
</template>

<style scoped>
	@tailwind components;

	@layer components {
		.skill-group-container {
			@apply xl:px-5 mb-10 md:w-1/2 xl:w-1/4 xl:m-0; 
		}
	}
</style>