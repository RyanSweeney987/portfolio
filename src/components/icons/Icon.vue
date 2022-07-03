<script setup lang="ts">

</script>

<template>
	<div class="icon-container"><slot></slot></div>
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

<style>
	.icon-container svg {
		width: 2rem;
		height: 2rem;
	}
</style>