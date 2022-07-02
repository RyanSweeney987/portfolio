<script setup lang="ts">
const props = defineProps<{
	imgCaption?: string
}>()

</script>

<template>
	<div class="md:flex ">
		<!-- Profile picture -->
		<figure class="w-50 profile-image">
			<slot name="profile-image"></slot>
			<figcaption v-if="(typeof imgCaption) !== undefined" class="italic text-sm text-center">{{imgCaption}}</figcaption>
		</figure>
		<!-- Bio text -->
		<div class="px-4 pt-2">
			<div class="pb-4">
				<slot name="profile-title"></slot>
			</div>
			<div class="profile-text w-100">
				<slot name="profile-body"></slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@tailwind components;
	
	@layer components {
		.profile-image {
			@apply flex justify-center md:block;
		}

		.profile-image img {
			max-width: 10rem;
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