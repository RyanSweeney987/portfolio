<script setup lang="ts">
import Icon from "./Icon.vue";

defineProps<{
	iconName: string
}>()

const emits = defineEmits(['onClick']);

function _onClick() {
	emits('onClick');
}
</script>

<template>
	<button class="link-button" v-on:click="_onClick" type="button" :title="iconName">
		<Icon :icon-name="iconName"/>
	</button>
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
</style>

<style>
	.link-button .icon-container .icon {
		width: 100%;
		height: 100%;
	}
</style>