<script setup lang="ts">
const props = defineProps<{
	imgCaption?: string
}>()

</script>

<template>
	<div class="md:flex ">
		<!-- Profile picture -->
		<div class="profile-image">
			<figure class="w-full md:w-auto flex flex-wrap justify-center">
				<slot name="profile-image"></slot>
				<figcaption v-if="(typeof imgCaption) !== undefined" class="w-full md:w-auto italic text-sm text-center">{{imgCaption}}</figcaption>
			</figure>
		</div>
		<!-- Bio text -->
		<div class="px-4 pt-2">
			<div class="pb-4">
				<slot name="profile-title"></slot>
			</div>
			<div class="profile-text w-full">
				<slot name="profile-body"></slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@tailwind components;
	
	@layer components {
		.profile-image {
			@apply flex justify-center md:block w-full md:w-auto;
		}

		.profile-image img {
			max-width: 10rem;
			width: 100%;
			@apply rounded-lg shadow-sm;
		}

		.profile-text {
			@apply text-justify lg:text-left;
		}

		.profile-text p {
			@apply mb-2;
		}
	}
</style>

<style>
	@tailwind components;
	
	@layer components {
		.profile-image img {
			max-width: 10rem;
			@apply rounded-lg shadow-sm;
		}

		.profile-text p {
			@apply mb-2;
		}
	}
</style>