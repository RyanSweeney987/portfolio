<script setup lang="ts">
import { computed } from 'vue';

const emits = defineEmits(['onClick']);

function _onClick() {
	emits('onClick');
}
</script>

<template>
	<button class="card" v-on:click="_onClick" type="button">
		<div class="card-image">
			<slot name="card-image"></slot>
		</div>
		<div class="card-header">
			<slot name="card-header"></slot>
		</div>
		<div class="card-body">
			<slot name="card-body"></slot>
		</div>
		<div class="card-footer">
			<slot name="card-footer"></slot>
		</div>
	</button>
</template>

<style scoped>
	@tailwind components;
	
	@layer components {
		.card {
			@apply p-2 rounded-sm w-full flex flex-col;
		}

		.card-image {
			background: black;
			@apply mb-4 aspect-video rounded-lg w-full;
		}

		.card-header {
			@apply mb-2 w-full;
		}

		.card-body {
			flex-basis: 5rem;
			@apply mb-2 w-full;
		}

		.card-footer {
			@apply w-full;
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