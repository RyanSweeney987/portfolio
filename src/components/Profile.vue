<script setup lang="ts">
const props = defineProps<{
	imgSrc?: string,
	imgAlt?: string,
	imgCaption?: string
}>()

</script>

<template>
	<div class="md:flex ">
		<!-- Profile picture -->
		<div class="profile-image">
			<slot name="profile-image"></slot>
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