<script setup lang="ts">
//@ts-nocheck
// Programming
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
import OpenGL from "./prog-langs/OpenGL.vue";
import Python from "./prog-langs/Python.vue";
import SASS from "./prog-langs/SASS.vue";
import Tailwind from "./prog-langs/Tailwind.vue";
import Tensorflow from "./prog-langs/Tensorflow.vue";
import Typescript from "./prog-langs/Typescript.vue";
import Unity from "./prog-langs/Unity.vue";
import UnrealEngine from "./prog-langs/UnrealEngine.vue";
import VueJS from "./prog-langs/VueJS.vue";
import R from "./prog-langs/R.vue";
import Java from "./prog-langs/Java.vue";
import Rust from "./prog-langs/Rust.vue";
import Angular from "./prog-langs/Angular.vue";
import SDL from "./prog-langs/SDL.vue";
import PHP from "./prog-langs/PHP.vue";
import WordPress from "./prog-langs/WordPress.vue";
// Social
import GitHub from "./social/GitHub.vue";
import Instagram from "./social/Instagram.vue";
import LinkedIn from "./social/LinkedIn.vue";
import YouTube from "./social/YouTube.vue";
// UI
import Close from "./ui/Close.vue";

import { ref } from 'vue';

const props = defineProps<{
	iconName: string
}>();

const _icon = ref(props.iconName);
const icons = {
	// Programming
	CSharp,
	CSS,
	Blender,
	CPlusPlus,
	DotNet,
	DotNetCore,
	HTML,
	Javascript,
	JQuery,
	Jupyter,
	MySQL,
	OpenCV,
	OpenGL,
	Python,
	SASS,
	Tailwind,
	Tensorflow,
	Typescript,
	Unity,
	UnrealEngine,
	VueJS,
	R,
	Java,
	Rust,
	Angular,
	SDL,
	PHP,
	WordPress,
	// Social
	GitHub,
	Instagram,
	LinkedIn,
	YouTube,
	// UI
	Close
};

</script>

<template>
	<div class="icon-container">
		<component class="icon" :is="icons[_icon]"></component>
	</div>

</template>

<style scoped>
	@tailwind components;

	@layer components {
		.icon-container {	
			padding: 0.25rem;
			@apply font-bold underline rounded-sm aspect-square;
		}
	}
</style>