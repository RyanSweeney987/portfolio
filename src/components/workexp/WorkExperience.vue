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

</script>

<template>
	<div class="w-100 flex flex-wrap">
		<Card class="w-1/4" :bg-col="bgCol">
			<template v-slot:card-image>
				<img class="with-background" src="../../assets/work/cerebreon-logo_RGB.png" alt="Company logo of Cerebreon Ltd."/>
			</template>
			<template v-slot:card-header>
				<div class="flex justify-between">
					<h1 class="text-l font-bold">Cerebreon Ltd.</h1>
					<h1 class="text-l">2018 - 2021</h1>
				</div>
			</template>
			<template v-slot:card-body>
				<div class="flex justify-between">
					<label class="font-bold">Title:</label>
					<p>Developer</p>
				</div>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-100">
					<Icon class="mx-1 w-1/6"><DotNetCore/></Icon>
					<Icon class="mx-1 w-1/6"><MySQL/></Icon>
					<Icon class="mx-1 w-1/6"><Angular/></Icon>
					<Icon class="mx-1 w-1/6"><CSharp/></Icon>
					<Icon class="mx-1 w-1/6"><Typescript/></Icon>
					<Icon class="mx-1 w-1/6"><HTML/></Icon>
					<Icon class="mx-1 w-1/6"><CSS/></Icon>
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