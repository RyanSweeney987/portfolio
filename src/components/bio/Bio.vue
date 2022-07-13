<script setup lang="ts">
import YouTube from "../icons/social/YouTube.vue";
import GitHub from "../icons/social/GitHub.vue";
import Instagram from "../icons/social/Instagram.vue";
import LinkedIn from "../icons/social/LinkedIn.vue";
import IconLink from "../icons/IconLink.vue";
import Profile from "../Profile.vue";

const profileImageSrc = "/portfolio/src/assets/profile.jpg";

defineProps<{
	bgCol: string
}>()

</script>

<template>
	<Profile img-caption="TODO: Take a new picture">
		<template v-slot:profile-image>
			<div class="flex justify-center w-full md:w-auto">
				<img class="w-auto h-auto bio-image aspect-square" src="../../assets/profile.jpg" alt="Profile picture of Ryan Sweeney"/>
			</div>
		</template>
		<template v-slot:profile-title>
			<h1 class="text-3xl text-white text-center md:text-left">Ryan Sweeney</h1>
		</template>
		<template v-slot:profile-body>
			<p class="mb-2">Hi! I'm a recent graduate from the <a class="link" :class="bgCol" href="https://www.lincoln.ac.uk/">University of Lincoln</a> with an expected 1st in <a class="link" :class="bgCol" href="https://www.lincoln.ac.uk/course/cgpcmpub/">Games Computing</a>.</p>
			<p class="mb-2">Love playing video games and I enjoy working on game related projects in my spare time too. FinTech is the desired career path and have commercial experience in the personal debt industry. My biggest interested is in AI and it's potential applications. Other interests include 3D rendering, robotics, and aerospace.</p>
			<div class="md:flex items-center">
				<p>Based in Irvine, Scotland</p>
				<div class="w-full h-px my-4 md:w-px md:h-4 md:mx-10 md:my-0 bg-gray-200"></div>
				<div class="flex flex-wrap w-full justify-center md:justify-start">
					<IconLink class="mx-1" :bg-col="bgCol" link="https://www.linkedin.com/in/ryanairth-sweeney/"><LinkedIn/></IconLink>
					<IconLink class="mx-1" :bg-col="bgCol" link="https://github.com/RyanSweeney987" ><GitHub/></IconLink>
					<IconLink class="mx-1" :bg-col="bgCol" link="https://www.youtube.com/c/RyanAirth987/featured"><YouTube/></IconLink>
					<IconLink class="mx-1" :bg-col="bgCol" link="https://www.instagram.com/sweeneygamedev/?hl=en"><Instagram/></IconLink>
				</div>
			</div>
		</template>
	</Profile>
</template>

<style scoped>
	@tailwind components;
	
	@layer components {
		.bio-text {
			@apply text-justify lg:text-left;
		}

		.bio-text p {
			@apply mb-2;
		}

		.link {
			@apply font-bold underline rounded-sm;
		}
	}

	a:hover {
		color: white;
	}

	.profile-pic {
		max-width: 10rem;
	}
</style>

<style>
	.bio-image {
		min-width: 4rem;
		min-height: 4rem;
	}
</style>