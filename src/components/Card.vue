<script setup lang="ts">
import { computed } from 'vue';

defineProps<{
	bgCol: string
}>()

const emits = defineEmits(['onClick']);

function _onClick() {
	emits('onClick');
}
</script>

<template>
	<button class="card w-full" v-on:click="_onClick" :class="bgCol" type="button">
		<div class="w-full card-image">
			<slot name="card-image"></slot>
		</div>
		<div class="w-full mb-2">
			<slot name="card-header"></slot>
		</div>
		<div class="w-full mb-2">
			<slot name="card-body"></slot>
		</div>
		<div class="w-full">
			<slot name="card-footer"></slot>
		</div>
	</button>
</template>

<style scoped>
	@tailwind components;
	
	@layer components {
		.card {
			@apply p-2 rounded-sm;
		}

		.card-image {
			@apply mb-4;
		}
	}
</style>

<style>
	@tailwind components;
	
	@layer components {
		button.card:hover h1, button.card:hover p, button.card:hover label {
			color: white;
		}

		.card:hover svg path {
			fill: white;
		}
		
		.card-image img {
			min-width: 10rem;
			min-height: auto;
			@apply rounded-lg shadow-sm p-1;
		}

		.card-text p {
			@apply mb-2;
		}
	}

	.card-image img.with-background {
		background-color: white;
	}

	.card-image img {
		width: 100%;
		height: 100%;
	}
</style>