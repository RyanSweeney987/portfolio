<script setup lang="ts">
import Icon from "./Icon.vue";

defineProps<{
	link: string
	title: string
	iconName: string
}>()
</script>

<template>
	<a class="link-icon" :href="link" :title="title">
		<Icon :icon-name="iconName"/>
	</a>
</template>

<style>
	@tailwind components;

	@layer components {
		.link-icon {
			@apply rounded-sm;
		}
	}

	a:hover svg path {
		fill: white;
	}
</style>

<style>
	.link-icon .icon-container .icon {
		width: 100%;
		height: 100%;
	}
</style>