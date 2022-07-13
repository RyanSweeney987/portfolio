<script setup lang="ts">
import SkillGroup from "../skills/SkillGroup.vue";
import IconButton from "../icons/IconButton.vue";

defineProps<{
	bgCol: string
}>()

function clicked(lang: string) {
	console.log("Clicked B - " + lang);
}
</script>

<template>
	<div class="w-full md:flex md:flex-wrap">
		<div class="skill-group-container">
			<SkillGroup title="Proficient">
				<IconButton class="m-1" @on-click="clicked('csharp')" :bg-col="bgCol" icon-name="CSharp"/>
				<IconButton class="m-1" @on-click="clicked('unity')" :bg-col="bgCol" icon-name="Unity"/>
				<IconButton class="m-1" @on-click="clicked('unrealengine')" :bg-col="bgCol" icon-name="UnrealEngine"/>
				<IconButton class="m-1" @on-click="clicked('typescript')" :bg-col="bgCol" icon-name="Typescript"/>
				<IconButton class="m-1" @on-click="clicked('css')" :bg-col="bgCol" icon-name="CSS"/>
				<IconButton class="m-1" @on-click="clicked('html')" :bg-col="bgCol" icon-name="HTML"/>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Used">
				<IconButton class="m-1" @on-click="clicked('angular')" :bg-col="bgCol" icon-name="Angular"/>
				<IconButton class="m-1" @on-click="clicked('cplusplus')" :bg-col="bgCol" icon-name="CPlusPlus"/>
				<IconButton class="m-1" @on-click="clicked('dotnet')" :bg-col="bgCol" icon-name="DotNet"/>
				<IconButton class="m-1" @on-click="clicked('dotnetcore')" :bg-col="bgCol" icon-name="DotNetCore"/>
				<IconButton class="m-1" @on-click="clicked('javascript')" :bg-col="bgCol" icon-name="Javascript"/>
				<IconButton class="m-1" @on-click="clicked('opengl')" :bg-col="bgCol" icon-name="OpenGL"/>
				<IconButton class="m-1" @on-click="clicked('sass')" :bg-col="bgCol" icon-name="SASS"/>
				<IconButton class="m-1" @on-click="clicked('jquery')" :bg-col="bgCol" icon-name="JQuery"/>
				<IconButton class="m-1" @on-click="clicked('python')" :bg-col="bgCol" icon-name="Python"/>
				<IconButton class="m-1" @on-click="clicked('blender')" :bg-col="bgCol" icon-name="Blender"/>
				<IconButton class="m-1" @on-click="clicked('vuejs')" :bg-col="bgCol" icon-name="VueJS"/>
				<IconButton class="m-1" @on-click="clicked('tailwind')" :bg-col="bgCol" icon-name="Tailwind"/>
				<IconButton class="m-1" @on-click="clicked('tensorflow')" :bg-col="bgCol" icon-name="TensorFlow"/>
				<IconButton class="m-1" @on-click="clicked('mysql')" :bg-col="bgCol" icon-name="MySQL"/>
				<IconButton class="m-1" @on-click="clicked('java')" :bg-col="bgCol" icon-name="Java"/>
				<IconButton class="m-1" @on-click="clicked('sdl')" :bg-col="bgCol" icon-name="SDL"/>
			</SkillGroup>
		</div>
		<div class="skill-group-container">
			<SkillGroup title="Dabbled">			
				<IconButton class="m-1" @on-click="clicked('opencv')" :bg-col="bgCol" icon-name="OpenCV"/>
				<IconButton class="m-1" @on-click="clicked('r')" :bg-col="bgCol" icon-name="R"/>
				<IconButton class="m-1" @on-click="clicked('jupyter')" :bg-col="bgCol" icon-name="Jupyter"/>
				<IconButton class="m-1" @on-click="clicked('rust')" :bg-col="bgCol" icon-name="Rust"/>
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