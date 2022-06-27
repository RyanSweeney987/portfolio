<script setup lang="ts">
import YouTube from "./icons/social/YouTube.vue";
import GitHub from "./icons/social/GitHub.vue";
import Instagram from "./icons/social/Instagram.vue";
import LinkedIn from "./icons/social/LinkedIn.vue";
import IconLink from "./icons/ui/IconLink.vue";

</script>

<template>
	<div class="md:flex ">
		<!-- Profile picture -->
		<div class="w-50 flex justify-center md:block">
			<img class="rounded-lg shadow-sm profile-pic" src="../assets/profile.jpg" loading="lazy"/>
		</div>
		<!-- Bio text -->
		<div class="px-4 pt-2">
			<h1 class="text-3xl pb-4 text-white">Ryan Sweeney</h1>
			<div class="bio-text">
				<p class="mb-2">Hi! I'm a recent graduate from the <a class="link" href="https://www.lincoln.ac.uk/">University of Lincoln</a> with an expected 1st in <a class="link" href="https://www.lincoln.ac.uk/course/cgpcmpub/">Games Computing</a>.</p>
				<p class="mb-2">Love playing video games and I enjoy working on game related projects in my spare time too. FinTech is the desired career path and have commercial experience in the personal debt industry. My biggest interested is in AI and it's potential applications. Other interests include 3D rendering, robotics, and aerospace.</p>
			</div>
			<div class="md:flex items-center">
				<p>Based in Irvine, Scotland</p>
				<div class="w-100 h-px my-4 md:w-px md:h-4 md:mx-10 md:my-0 bg-gray-200"></div>
				<div class="flex flex-wrap w-100 justify-center md:justify-start">
					<IconLink link="https://www.linkedin.com/in/ryanairth-sweeney/"><LinkedIn/></IconLink>
					<IconLink link="https://github.com/RyanSweeney987"><GitHub/></IconLink>
					<IconLink link="https://www.youtube.com/c/RyanAirth987/featured"><YouTube/></IconLink>
					<IconLink link="https://www.instagram.com/sweeneygamedev/?hl=en"><Instagram/></IconLink>
				</div>
			</div>
		</div>
	</div>
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
			@apply font-bold underline;
		}

		.link:hover {
			@apply bg-gradient-to-br from-orange-400 to-pink-500 rounded-sm;
		}
	}

	a {
		margin-right: 0.25rem;
	}

	a:hover {
		color: white;
	}

	.profile-pic {
		max-width: 10rem;
	}
</style>