<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Profile from "./components/Profile.vue";
import SocialMedia from "./components/SocialMedia.vue";
</script>

<template>
	<!-- <header>
		<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<HelloWorld msg="You did it!asdasd" />
			<Profile/>
		</div>
	</header>

	<main>
		<TheWelcome />
	</main> -->

	<!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->
	<div class="bg-slate-800 flex w-100 h-100">
		<div>
			<img>
		</div>
		<div>
			<div class="text-center">This site is a work in progress</div>
			<SocialMedia/>
		</div>
	</div>
</template>

<style>
@import "./assets/base.css";

#app {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;

	font-weight: normal;
}

header {
	line-height: 1.5;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

a,
.green {
	text-decoration: none;
	color: hsla(160, 100%, 37%, 1);
	transition: 0.4s;
}

@media (hover: hover) {
	a:hover {
		background-color: hsla(160, 100%, 37%, 0.2);
	}
}

@media (min-width: 1024px) {
	body {
		display: flex;
		place-items: center;
	}

	#app {
		padding: 0 2rem;
	}

	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	.logo {
		margin: 0 2rem 0 0;
	}
}
</style>
