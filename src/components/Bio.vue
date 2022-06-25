<script setup lang="ts">
import IconYouTube from "./icons/social/IconYouTube.vue";
import IconGitHub from "./icons/social/IconGitHub.vue";
import IconInstagram from "./icons/social/IconInstagram.vue";
import IconLinkedIn from "./icons/social/IconLinkedIn.vue";

</script>

<template>
	<!-- Profile picture -->
	<div class="w-50 flex justify-center lg:block">
		<img class="rounded-lg shadow-sm" src="../assets/profile.jpg" loading="lazy"/>
	</div>
	<!-- Bio text -->
	<div class="px-4 pt-2">
		<h1 class="text-3xl pb-4 text-white">Ryan Sweeney</h1>
		<p class="mb-2">Hi! I'm a recent graduate from the <a class="link" href="https://www.lincoln.ac.uk/">University of Lincoln</a> with an expected 1st in <a class="link" href="https://www.lincoln.ac.uk/course/cgpcmpub/">Games Computing</a>.</p>
		<p class="mb-2">Love playing video games and I enjoy working on game related projects in my spare time too. FinTech is the desired career path and have commercial experience in the personal debt industry. My biggest interested is in AI and it's potential applications. Other interests include 3D rendering, robotics, and aerospace.</p>
		<div class="lg:flex items-center">
			<p>Based in Irvine, Scotland</p>
			<div class="w-100 h-px my-4 lg:w-px lg:h-4 lg:mx-10 lg:my-0 bg-gray-200"></div>
			<div class="flex flex-wrap w-100">
				<a class="link-icon" href="https://www.linkedin.com/in/ryanairth-sweeney/"><IconLinkedIn/></a>
				<a class="link-icon" href="https://github.com/RyanSweeney987"><IconGitHub/></a>
				<a class="link-icon" href="https://www.youtube.com/c/RyanAirth987/featured"><IconYouTube/></a>
				<a class="link-icon" href="https://www.instagram.com/sweeneygamedev/?hl=en"><IconInstagram/></a>
			</div>
		</div>
	</div>
</template>

<style>
	@tailwind components;
	
	@layer components {
		.link {
			@apply font-bold underline;
		}

		.link:hover {
			@apply bg-gradient-to-br from-orange-400 to-pink-500 rounded-sm;
		}

		.link-icon {
			@apply font-bold underline;
		}

		.link-icon:hover {
			@apply bg-gradient-to-br from-orange-400 to-pink-500 rounded-sm;
		}
	}

	a {
		margin-right: 0.25rem;
	}

	a:hover {
		color: white;
	}

	a:hover svg path {
		fill: white;
	}
</style>