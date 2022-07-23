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
				<IconButton class="m-1" v-for="(skill, index) in skillStore.skills.filter(_ => _.skillLevelId === level.id)" :key="skill.id" :bg-col="bgCol" :icon-name="skill.icon" @on-click="clicked(skill.slug)"/>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Portfolio Made With">
				<IconButton class="m-1" @on-click="clicked('vuejs')" :bg-col="bgCol" icon-name="VueJS"/>
				<IconButton class="m-1" @on-click="clicked('html')" :bg-col="bgCol" icon-name="HTML"/>
				<IconButton class="m-1" @on-click="clicked('typescript')" :bg-col="bgCol" icon-name="Typescript"/>
				<IconButton class="m-1" @on-click="clicked('css')" :bg-col="bgCol" icon-name="CSS"/>
				<IconButton class="m-1" @on-click="clicked('tailwind')" :bg-col="bgCol" icon-name="Tailwind"/>
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