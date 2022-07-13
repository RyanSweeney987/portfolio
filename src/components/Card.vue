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
		<div class="card-image w-full">
			<slot name="card-image"></slot>
		</div>
		<div class="card-header w-full">
			<slot name="card-header"></slot>
		</div>
		<div class="card-body w-full">
			<slot name="card-body"></slot>
		</div>
		<div class="card-footer w-full">
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
			background: black;
			@apply mb-4 aspect-video rounded-lg;
		}

		.card-header {
			@apply mb-2;
		}

		.card-body {
			height: 3rem;
			@apply mb-2;
		}

		.card-footer {
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
			@apply rounded-lg shadow-sm aspect-video;
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
		height: auto;
	}
</style>