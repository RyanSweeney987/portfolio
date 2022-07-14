<script setup lang="ts">
import Icon from "../icons/Icon.vue";
import Card from "../../components/Card.vue";

const cerebreonLogo = "cerebreon-logo_RGB.png";

defineProps<{
	bgCol: string
}>()

function clicked(lang: string) {
	console.log("Clicked B - " + lang);
}
</script>

<template>
	<div class="w-full flex flex-wrap work-experience">
		<Card class="m-1 sm:w-1/2 lg:w-1/3 2xl:w-1/4" :bg-col="bgCol" @on-click="clicked('Cerebreon Technologies')">
			<template v-slot:card-image>
				<img class="with-background" :src="`/thumbs/workexp/${cerebreonLogo}`" alt="Company logo of Cerebreon Ltd."/>
			</template>
			<template v-slot:card-header>
				<div class="flex justify-between">
					<h4 class="text-l font-bold text-left">Cerebreon Technologies</h4>
					<h4 class="text-l text-right">2018 - 2021</h4>
				</div>
			</template>
			<template v-slot:card-body>
				<div class="flex justify-between w-full">
					<label class="font-bold">Title:</label>
					<p>Developer</p>
				</div>
				<p>Full-stack development</p>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-full">
					<Icon class="mx-1" icon-name="DotNetCore"/>
					<Icon class="mx-1" icon-name="MySQL"/>
					<Icon class="mx-1" icon-name="Angular"/>
					<Icon class="mx-1" icon-name="CSharp"/>
					<Icon class="mx-1" icon-name="Typescript"/>
					<Icon class="mx-1" icon-name="HTML"/>
					<Icon class="mx-1" icon-name="CSS"/>
				</div>
			</template>
		</Card>
	</div>
</template>

<style>
	.lang-icon-container {
		overflow-y: hidden;
		overflow-x: auto;
		scroll-behavior: auto;
	}

	.work-experience .icon-container .icon {
		width: 2rem;
		height: 2rem;
	}
</style>