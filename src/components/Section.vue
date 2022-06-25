<script setup lang="ts">
import { computed } from '@vue/reactivity';

defineProps<{
	colourDir: string,
	fromColour: string,
	toColour: string,
	bgSvg: string
}>()
</script>

<template>
	<div class="rounded-lg p-0.5 mb-10 shadow-xl" :class="[colourDir, fromColour, toColour]">
		<div class="lg:flex rounded-md shadow-lg p-4 bg-slate-800" v-bind:style="{ 'background-image': 'url(' + bgSvg  + ')' }">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<style scoped>

</style>