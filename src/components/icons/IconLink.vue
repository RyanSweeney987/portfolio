<script setup lang="ts">
defineProps<{
	link: string
	bgCol: string
}>()
</script>

<template>
	<a class="link-icon" :class="bgCol" :href="link"><slot></slot></a>
</template>

<style>
	@tailwind components;

	@layer components {
		.link-icon {
			@apply font-bold underline rounded-sm;
		}
	}

	a:hover svg path {
		fill: white;
	}
</style>