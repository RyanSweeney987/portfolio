<script setup lang="ts">
defineProps<{
	link: string
}>()
</script>

<template>
	<a class="link-icon" :href="link"><slot></slot></a>
</template>

<style>
	@tailwind components;

	@layer components {
		.link-icon {
			@apply font-bold underline;
		}

		.link-icon:hover {
			@apply bg-gradient-to-br from-orange-400 to-pink-500 rounded-sm;
		}
	}

	a:hover svg path {
		fill: white;
	}
</style>