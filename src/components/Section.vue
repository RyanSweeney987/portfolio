<script setup lang="ts">
import { computed } from '@vue/reactivity';

defineProps<{
	colourDir: string,
	fromColour: string,
	toColour: string,
	bgSvg: string,
}>()
</script>

<template>
	<section class="rounded-lg p-0.5 mb-10 shadow-xl" :class="[colourDir, fromColour, toColour]">
		<div class="rounded-md shadow-lg p-4 bg-slate-800" v-bind:style="{ 'background-image': 'url(' + bgSvg  + ')' }">
			<slot name="content"></slot>
		</div>
	</section>
</template>

<style scoped>

</style>