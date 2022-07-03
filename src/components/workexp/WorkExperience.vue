<script setup lang="ts">
import Profile from "../Profile.vue";
import Icon from "../icons/Icon.vue";
import Card from "../../components/Card.vue";
import DotNetCore from "../icons/prog-langs/DotNetCore.vue";
import Angular from "../icons/prog-langs/Angular.vue";
import CSharp from "../icons/prog-langs/CSharp.vue";
import HTML from "../icons/prog-langs/HTML.vue";
import CSS from "../icons/prog-langs/CSS.vue";
import Typescript from "../icons/prog-langs/Typescript.vue";
import MySQL from "../icons/prog-langs/MySQL.vue";

defineProps<{
	bgCol: string
}>()

function clicked(lang: string) {
	console.log("Clicked B - " + lang);
}
</script>

<template>
	<div class="w-full flex flex-wrap">
		<Card class="sm:w-1/2 lg:w-1/3 2xl:w-1/4" :bg-col="bgCol" @on-click="clicked('Cerebreon')">
			<template v-slot:card-image>
				<img class="with-background" src="../../assets/work/cerebreon-logo_RGB.png" alt="Company logo of Cerebreon Ltd."/>
			</template>
			<template v-slot:card-header>
				<div class="flex justify-between">
					<h4 class="text-l font-bold text-left">Cerebreon Ltd.</h4>
					<h4 class="text-l text-right">2018 - 2021</h4>
				</div>
			</template>
			<template v-slot:card-body>
				<div class="flex justify-between">
					<label class="font-bold">Title:</label>
					<p>Developer</p>
				</div>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-full">
					<Icon class="mx-1"><DotNetCore/></Icon>
					<Icon class="mx-1"><MySQL/></Icon>
					<Icon class="mx-1"><Angular/></Icon>
					<Icon class="mx-1"><CSharp/></Icon>
					<Icon class="mx-1"><Typescript/></Icon>
					<Icon class="mx-1"><HTML/></Icon>
					<Icon class="mx-1"><CSS/></Icon>
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
</style>

	-- Work experience --
	-- Profile --
		-- Image --
			Company logo?
		-- Title --
			Where?
			When?
		-- Profile Body --
			What do they do?
			What did I do?
				Roles?
					Junior/Mid/Senior?
				Work type?
					Remote/Hybrid/In Office?
			-- Clickable to show skill details --
				Languages/framworks?