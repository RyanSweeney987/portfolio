<script setup lang="ts">
defineProps<{
	bgCol: string
}>()

const emits = defineEmits(['onClick']);

function _onClick() {
	emits('onClick');
}
</script>

<template>
	<button class="link-button" :class="bgCol" v-on:click="_onClick" type="button"><slot></slot></button>
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