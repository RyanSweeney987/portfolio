<script setup lang="ts">

function onClick() {
	console.log("Clicked button");
}
</script>

<template>
	<button class="link-button" v-on:click="onClick"><slot></slot></button>
</template>

<style scoped>
	@tailwind components;

	@layer components {
		.link-button {
			max-width: 4rem;
			padding: 0.25rem;
			@apply font-bold underline rounded-sm;
		}

		.link-button:hover {
			@apply bg-gradient-to-b from-sky-500 to-violet-500 ;
		}
	}

	a:hover svg path {
		fill: white;
	}
</style>