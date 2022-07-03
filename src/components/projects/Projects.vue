<script setup lang="ts">
import Icon from "../icons/Icon.vue";
import Card from "../../components/Card.vue";
import Unity from "../icons/prog-langs/Unity.vue";
import CSharp from "../icons/prog-langs/CSharp.vue";
import UnrealEngine from "../icons/prog-langs/UnrealEngine.vue";
import CPlusPlus from "../icons/prog-langs/CPlusPlus.vue";
defineProps<{
	bgCol: string
}>()

function clicked(lang: string) {
	console.log("Clicked B - " + lang);
}
</script>

<template>
	<div class="w-full flex flex-wrap">
		<Card class="sm:w-1/2 lg:w-1/3 2xl:w-1/4" :bg-col="bgCol" @on-click="clicked('City Generator')">
			<template v-slot:card-image>
				<img class="" src="../../assets/projects/city_gen_thumb.png" alt="Thumbnail of City Generator project made in Unity."/>
			</template>
			<template v-slot:card-header>
				<h4>City Generator</h4>
			</template>
			<template v-slot:card-body>
				<p>Procedural city generator made with the Unity game engine.</p>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-full">
					<Icon class="mx-1"><Unity/></Icon>
					<Icon class="mx-1"><CSharp/></Icon>
				</div>
			</template>
		</Card>
		<Card class="sm:w-1/2 lg:w-1/3 2xl:w-1/4" :bg-col="bgCol" @on-click="clicked('Underwater Cave')">
			<template v-slot:card-image>
				<img class="" src="../../assets/projects/underwater_thumb.png" alt="Thumbnail of Unerwater Cave project made in Unity."/>
			</template>
			<template v-slot:card-header>
				<h4>Underwater Cave</h4>
			</template>
			<template v-slot:card-body>
				<p>Underwater cave scene made with the Unreal Engine 4.</p>
			</template>
			<template v-slot:card-footer>
				<div class="flex lang-icon-container w-full">
					<Icon class="mx-1"><UnrealEngine/></Icon>
					<Icon class="mx-1"><CPlusPlus/></Icon>
				</div>
			</template>
		</Card>
	</div>
</template>