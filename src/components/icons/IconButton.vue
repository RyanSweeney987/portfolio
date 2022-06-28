<script setup lang="ts">
const emits = defineEmits(['onClick']);

function _onClick() {
	emits('onClick');
}
</script>

<template>
	<button class="link-button" v-on:click="_onClick" type="button"><slot></slot></button>
</template>

<style scoped>
	@tailwind components;

	@layer components {
		.link-button {
			max-width: 4rem;
			max-height: 4rem;
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

<style>
	.link-button svg {
		width: 100%;
		height: 100%;
	}
</style>