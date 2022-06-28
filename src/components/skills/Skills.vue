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

function clicked(lang: string) {
	console.log("Clicked B - " + lang);
}
</script>

<template>
	<div class="w-100 md:flex md:flex-wrap">
		<div class="skill-group-container">
			<SkillGroup title="Proficient">
				<IconButton @on-click="clicked('csharp')"><CSharp/></IconButton>
				<IconButton @on-click="clicked('unity')"><Unity/></IconButton>
				<IconButton @on-click="clicked('unrealengine')"><UnrealEngine/></IconButton>
				<IconButton @on-click="clicked('typescript')"><Typescript/></IconButton>
				<IconButton @on-click="clicked('css')"><CSS/></IconButton>
				<IconButton @on-click="clicked('html')"><HTML/></IconButton>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Used">
				<IconButton @on-click="clicked('angular')"><Angular/></IconButton>
				<IconButton @on-click="clicked('cplusplus')"><CPlusPlus/></IconButton>
				<IconButton @on-click="clicked('dotnet')"><DotNet/></IconButton>
				<IconButton @on-click="clicked('dotnetcore')"><DotNetCore/></IconButton>
				<IconButton @on-click="clicked('javascript')"><Javascript/></IconButton>
				<IconButton @on-click="clicked('opengl')"><OpenGL/></IconButton>
				<IconButton @on-click="clicked('sass')"><SASS/></IconButton>
				<IconButton @on-click="clicked('jquery')"><JQuery/></IconButton>
				<IconButton @on-click="clicked('python')"><Python/></IconButton>
				<IconButton @on-click="clicked('blender')"><Blender/></IconButton>
				<IconButton @on-click="clicked('vuejs')"><VueJS/></IconButton>
				<IconButton @on-click="clicked('tailwind')"><Tailwind/></IconButton>
				<IconButton @on-click="clicked('tensorflow')"><Tensorflow/></IconButton>
				<IconButton @on-click="clicked('mysql')"><MySQL/></IconButton>
				<IconButton @on-click="clicked('java')"><Java/></IconButton>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Dabbled">			
				<IconButton @on-click="clicked('opencv')"><OpenCV/></IconButton>
				<IconButton @on-click="clicked('r')"><R/></IconButton>
				<IconButton @on-click="clicked('jupyter')"><Jupyter/></IconButton>
				<IconButton @on-click="clicked('rust')"><Rust/></IconButton>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Portfolio Made With">
				<IconButton @on-click="clicked('vuejs')"><VueJS/></IconButton>
				<IconButton @on-click="clicked('html')"><HTML/></IconButton>
				<IconButton @on-click="clicked('typescript')"><Typescript/></IconButton>
				<IconButton @on-click="clicked('css')"><CSS/></IconButton>
				<IconButton @on-click="clicked('tailwind')"><Tailwind/></IconButton>
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