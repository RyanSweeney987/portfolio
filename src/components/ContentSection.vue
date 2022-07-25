<script setup lang="ts">
defineProps<{
	bgSvg: string
}>()

</script>

<template>
	<section class="rounded-lg p-0.5 mb-10 shadow-xl">
		<div class="rounded-md p-4 bg-slate-800" :class="bgSvg">
			<slot name="content"></slot>
		</div>
	</section>
</template>

<style scoped>

</style>