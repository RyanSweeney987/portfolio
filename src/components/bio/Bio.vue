<script setup lang="ts">
import YouTube from "../icons/social/YouTube.vue";
import GitHub from "../icons/social/GitHub.vue";
import Instagram from "../icons/social/Instagram.vue";
import LinkedIn from "../icons/social/LinkedIn.vue";
import IconLink from "../icons/IconLink.vue";
import Profile from "../Profile.vue";

defineProps<{
	bgCol: string
}>()

</script>

<template>
	<Profile class="bio-profile">
		<template #profile-media>
			<figure class="bio-image w-full md:w-auto flex flex-wrap justify-center">
				<div class="flex justify-center w-full md:w-auto">
					<img class="w-auto h-auto aspect-square" src="../../assets/profile.jpg" alt="Profile picture of Ryan Sweeney"/>
				</div>
				<figcaption class="w-full md:w-auto italic text-sm text-center">TODO: Take a new picture</figcaption>
			</figure>
		</template>
		<template #profile-title>
			<h1 class="text-3xl text-white text-center md:text-left">Ryan Sweeney</h1>
		</template>
		<template #profile-body>
			<div class="bio-text">
				<p>Hi! I'm a recent graduate from the <a class="link" :class="bgCol" href="https://www.lincoln.ac.uk/">University of Lincoln</a> with an expected 1st in <a class="link" :class="bgCol" href="https://www.lincoln.ac.uk/course/cgpcmpub/">Games Computing</a>.</p>
				<p>Love playing video games and I enjoy working on game related projects in my spare time too. FinTech is the desired career path and have commercial experience in the personal debt industry. My biggest interested is in AI and it's potential applications. Other interests include 3D rendering, robotics, and aerospace.</p>
				<p>This website represents both a portfolio and a CV. In the future, any software products that I have made will also be shared here.</p>
				<p>I'm currently not looking for work but if you still want to get in touch, message me via LinkedIn.</p>
			</div>
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
		.bio-image {
			@apply flex justify-center md:block w-full md:w-auto;
		}

		.bio-image img {
			max-width: 15rem;
			@apply w-full rounded-lg;
		}

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

	.bio-image {
		min-width: 4rem;
		min-height: 4rem;
	}
</style>

<style>
	@tailwind components;
	
	@layer components {
		/*.bio-profile .profile-media {
			@apply flex-shrink-0;
		}

		.bio-profile .profile-content {
			@apply flex-shrink-0;
		}*/

		.bio-profile.profile {
			@apply md:flex;
		}
	}
</style>