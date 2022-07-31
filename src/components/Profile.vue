<template>
	<div class="profile">
		<!-- Profile picture -->
		<div class="profile-media">
			<slot name="profile-media"></slot>
		</div>
		<!-- Bio text -->
		<div class="profile-content">
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
		.profile-media {
			flex-basis: 15rem;
		}

		.profile-content {
			flex-basis: auto;
			@apply px-4 w-full;
		}
	}
</style>

<style>
	@tailwind components;
	
	@layer components {
		/*.profile h1, .profile h2, .profile h3 {
			@apply mt-4
		}*/

		.header-margin p {
			@apply mb-4;
		}
	}
</style>