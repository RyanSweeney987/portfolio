<script setup lang="ts">
import { useRoute } from "vue-router";
import Icon from "./components/icons/Icon.vue";

const route = useRoute();
</script>

<template>
	<div class="flex justify-center w-full text-5xl my-10"><p>This site is still a WIP</p></div>
	<div v-if="$route.name !== 'home'" class="w-full flex items-center justify-between mb-5">
		<h1 class="capitalize text-4xl">{{$route.name}} Description</h1>
		<router-link :to="{name: 'home'}" class="rounded-sm back-link" :class="route.meta.bgHover"><icon :icon-name="'Close'"/></router-link>
	</div>
	<router-view></router-view>
</template>

<style>
	@import "./assets/base.css";

	/*max-width: 1024px;*/
	#app {
		margin: 0 auto;
		padding: 0 2rem;
		height: 100vh;
		max-height: 100vh;
		overflow: auto;
		font-weight: normal;
	}

	.back-link .icon-container .icon {
		width: 3rem;
		height: 3rem;
	}

	@media (min-width: 1024px) {
		body {
			display: flex;
			place-items: center;
		}

		#app {
			padding: 0 5rem;
		}
	}

	@media (min-width: 1536px) {
		#app {
			padding: 0 14rem;
		}
	}
</style>