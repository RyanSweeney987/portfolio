<script setup lang="ts">
import CSharp from "../icons/prog-langs/CSharp.vue";
import CSS from "../icons/prog-langs/CSS.vue";
import Blender from "../icons/prog-langs/Blender.vue";
import CPlusPlus from "../icons/prog-langs/CPlusPlus.vue";
import DotNet from "../icons/prog-langs/DotNet.vue";
import DotNetCore from "../icons/prog-langs/DotNetCore.vue";
import HTML from "../icons/prog-langs/HTML.vue";
import Javascript from "../icons/prog-langs/Javascript.vue";
import JQuery from "../icons/prog-langs/JQuery.vue";
import Jupyter from "../icons/prog-langs/Jupyter.vue";
import MySQL from "../icons/prog-langs/MySQL.vue";
import OpenCV from "../icons/prog-langs/OpenCV.vue";
import OpenGL from "../icons/prog-langs/OpenGL.vue";
import Python from "../icons/prog-langs/Python.vue";
import SASS from "../icons/prog-langs/SASS.vue";
import Tailwind from "../icons/prog-langs/Tailwind.vue";
import Tensorflow from "../icons/prog-langs/Tensorflow.vue";
import Typescript from "../icons/prog-langs/Typescript.vue";
import Unity from "../icons/prog-langs/Unity.vue";
import UnrealEngine from "../icons/prog-langs/UnrealEngine.vue";
import VueJS from "../icons/prog-langs/VueJS.vue";
import SkillGroup from "../skills/SkillGroup.vue";
import IconButton from "../icons/IconButton.vue";
import R from "../icons/prog-langs/R.vue";
import Java from "../icons/prog-langs/Java.vue";
import Rust from "../icons/prog-langs/Rust.vue";
import Angular from "../icons/prog-langs/Angular.vue";

defineProps<{
	bgCol: string
}>()

function clicked(lang: string) {
	console.log("Clicked B - " + lang);
}
</script>

<template>
	<div class="w-100 md:flex md:flex-wrap">
		<div class="skill-group-container">
			<SkillGroup title="Proficient">
				<IconButton class="m-1" @on-click="clicked('csharp')" :bg-col="bgCol"><CSharp/></IconButton>
				<IconButton class="m-1" @on-click="clicked('unity')" :bg-col="bgCol"><Unity/></IconButton>
				<IconButton class="m-1" @on-click="clicked('unrealengine')" :bg-col="bgCol"><UnrealEngine/></IconButton>
				<IconButton class="m-1" @on-click="clicked('typescript')" :bg-col="bgCol"><Typescript/></IconButton>
				<IconButton class="m-1" @on-click="clicked('css')" :bg-col="bgCol"><CSS/></IconButton>
				<IconButton class="m-1" @on-click="clicked('html')" :bg-col="bgCol"><HTML/></IconButton>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Used">
				<IconButton class="m-1" @on-click="clicked('angular')" :bg-col="bgCol"><Angular/></IconButton>
				<IconButton class="m-1" @on-click="clicked('cplusplus')" :bg-col="bgCol"><CPlusPlus/></IconButton>
				<IconButton class="m-1" @on-click="clicked('dotnet')" :bg-col="bgCol"><DotNet/></IconButton>
				<IconButton class="m-1" @on-click="clicked('dotnetcore')" :bg-col="bgCol"><DotNetCore/></IconButton>
				<IconButton class="m-1" @on-click="clicked('javascript')" :bg-col="bgCol"><Javascript/></IconButton>
				<IconButton class="m-1" @on-click="clicked('opengl')" :bg-col="bgCol"><OpenGL/></IconButton>
				<IconButton class="m-1" @on-click="clicked('sass')" :bg-col="bgCol"><SASS/></IconButton>
				<IconButton class="m-1" @on-click="clicked('jquery')" :bg-col="bgCol"><JQuery/></IconButton>
				<IconButton class="m-1" @on-click="clicked('python')" :bg-col="bgCol"><Python/></IconButton>
				<IconButton class="m-1" @on-click="clicked('blender')" :bg-col="bgCol"><Blender/></IconButton>
				<IconButton class="m-1" @on-click="clicked('vuejs')" :bg-col="bgCol"><VueJS/></IconButton>
				<IconButton class="m-1" @on-click="clicked('tailwind')" :bg-col="bgCol"><Tailwind/></IconButton>
				<IconButton class="m-1" @on-click="clicked('tensorflow')" :bg-col="bgCol"><Tensorflow/></IconButton>
				<IconButton class="m-1" @on-click="clicked('mysql')" :bg-col="bgCol"><MySQL/></IconButton>
				<IconButton class="m-1" @on-click="clicked('java')" :bg-col="bgCol"><Java/></IconButton>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Dabbled">			
				<IconButton class="m-1" @on-click="clicked('opencv')" :bg-col="bgCol"><OpenCV/></IconButton>
				<IconButton class="m-1" @on-click="clicked('r')" :bg-col="bgCol"><R/></IconButton>
				<IconButton class="m-1" @on-click="clicked('jupyter')" :bg-col="bgCol"><Jupyter/></IconButton>
				<IconButton class="m-1" @on-click="clicked('rust')" :bg-col="bgCol"><Rust/></IconButton>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Portfolio Made With">
				<IconButton class="m-1" @on-click="clicked('vuejs')" :bg-col="bgCol"><VueJS/></IconButton>
				<IconButton class="m-1" @on-click="clicked('html')" :bg-col="bgCol"><HTML/></IconButton>
				<IconButton class="m-1" @on-click="clicked('typescript')" :bg-col="bgCol"><Typescript/></IconButton>
				<IconButton class="m-1" @on-click="clicked('css')" :bg-col="bgCol"><CSS/></IconButton>
				<IconButton class="m-1" @on-click="clicked('tailwind')" :bg-col="bgCol"><Tailwind/></IconButton>
			</SkillGroup>
		</div>
	</div>
</template>

<style scoped>
	@tailwind components;

	@layer components {
		.skill-group-container {
			@apply lg:px-5 mb-10 md:w-1/2 lg:w-1/4 lg:m-0;
		}
	}
</style>