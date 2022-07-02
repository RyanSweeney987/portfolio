<script setup lang="ts">
defineProps<{
	bgCol: string
	bgSvg: string
}>()

</script>

<template>
	<section class="rounded-lg p-0.5 mb-10 shadow-xl" :class="bgCol">
		<div class="rounded-md shadow-lg p-4 bg-slate-800" v-bind:style="{ 'background-image': 'url(' + bgSvg  + ')' }">
			<slot name="content"></slot>
		</div>
	</section>
</template>

<style scoped>

</style>