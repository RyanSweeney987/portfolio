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
import R from "../icons/prog-langs/R.vue";
import Java from "../icons/prog-langs/Java.vue";
import Rust from "../icons/prog-langs/Rust.vue";
import Angular from "../icons/prog-langs/Angular.vue";
import SDL from "../icons/prog-langs/SDL.vue";

import { ref } from 'vue';

const props = defineProps<{
	iconName: string
}>();

const _icon = ref(props.iconName);

const icons = {
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
	SDL
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
			max-width: 4rem;
			max-height: 4rem;
			padding: 0.25rem;
			@apply font-bold underline rounded-sm aspect-square;
		}
	}
</style>