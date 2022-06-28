<script setup lang="ts">
const props = defineProps<{
	imgSrc: string,
	imgAlt: string,
	imgCaption?: string,
	title: string,
}>()

</script>

<template>
	<div class="md:flex ">
		<!-- Profile picture -->
		<figure class="w-50 flex justify-center md:block">
			<img class="rounded-lg shadow-sm profile-pic" :src="imgSrc" :alt="imgAlt" loading="lazy"/>
			<figcaption v-if="(typeof imgCaption) !== undefined">{{imgCaption}}</figcaption>
		</figure>
		<!-- Bio text -->
		<div class="px-4 pt-2">
			<h1 class="text-3xl pb-4 text-white">{{title}}</h1>
			<div class="profile-text w-100">
				<slot name="profile-body"></slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@tailwind components;
	
	@layer components {
		.profile-text {
			@apply text-justify lg:text-left;
		}

		.profile-text p {
			@apply mb-2;
		}
	}

	.profile-pic {
		max-width: 10rem;
	}
</style>