<script setup lang="ts">
import CSharp from "./icons/prog-langs/CSharp.vue";
import CSS from "./icons/prog-langs/CSS.vue";
import Blender from "./icons/prog-langs/Blender.vue";
import CPlusPlus from "./icons/prog-langs/CPlusPlus.vue";
import DotNet from "./icons/prog-langs/DotNet.vue";
import DotNetCore from "./icons/prog-langs/DotNetCore.vue";
import HTML from "./icons/prog-langs/HTML.vue";
import Javascript from "./icons/prog-langs/Javascript.vue";
import JQuery from "./icons/prog-langs/JQuery.vue";
import Jupyter from "./icons/prog-langs/Jupyter.vue";
import MySQL from "./icons/prog-langs/MySQL.vue";
import OpenCV from "./icons/prog-langs/OpenCV.vue";
import OpenGL from "./icons/prog-langs/OpenGL.vue";
import Python from "./icons/prog-langs/Python.vue";
import SASS from "./icons/prog-langs/SASS.vue";
import Tailwind from "./icons/prog-langs/Tailwind.vue";
import Tensorflow from "./icons/prog-langs/Tensorflow.vue";
import Typescript from "./icons/prog-langs/Typescript.vue";
import Unity from "./icons/prog-langs/Unity.vue";
import UnrealEngine from "./icons/prog-langs/UnrealEngine.vue";
import VueJS from "./icons/prog-langs/VueJS.vue";
import SkillGroup from "./skills/SkillGroup.vue";
import IconButton from "./icons/ui/IconButton.vue";
import R from "./icons/prog-langs/R.vue";
import Java from "./icons/prog-langs/Java.vue";
import Rust from "./icons/prog-langs/Rust.vue";
</script>

<template>
	<div class="w-100 md:flex md:flex-wrap">
		<div class="skill-group-container">
			<SkillGroup title="Proficient">
				<IconButton><CSharp/></IconButton>
				<IconButton><Unity/></IconButton>
				<IconButton><UnrealEngine/></IconButton>
				<IconButton><Typescript/></IconButton>
				<IconButton><CSS/></IconButton>
				<IconButton><HTML/></IconButton>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Used">
				<IconButton><CPlusPlus/></IconButton>
				<IconButton><DotNet/></IconButton>
				<IconButton><DotNetCore/></IconButton>
				<IconButton><Javascript/></IconButton>
				<IconButton><OpenGL/></IconButton>
				<IconButton><SASS/></IconButton>
				<IconButton><JQuery/></IconButton>
				<IconButton><Python/></IconButton>
				<IconButton><Blender/></IconButton>
				<IconButton><VueJS/></IconButton>
				<IconButton><Tailwind/></IconButton>
				<IconButton><Tensorflow/></IconButton>
				<IconButton><MySQL/></IconButton>
				<IconButton><Java/></IconButton>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Dabbled">			
				<IconButton><OpenCV/></IconButton>
				<IconButton><R/></IconButton>
				<IconButton><Jupyter/></IconButton>
				<IconButton><Rust/></IconButton>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Portfolio Made With">
				<IconButton><VueJS/></IconButton>
				<IconButton><HTML/></IconButton>
				<IconButton><Typescript/></IconButton>
				<IconButton><CSS/></IconButton>
				<IconButton><Tailwind/></IconButton>
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