<script setup lang="ts">
import { useRoute } from "vue-router";
import Icon from "./components/icons/Icon.vue";

const route = useRoute();
</script>

<template>
	<nav v-if="$route.name !== 'home'" class="w-full mb-5 pb-0.5 shadow-xl sticky top-0 z-10" :class="route.meta.bg">
		<div class="nav-content p-4 bg-slate-800 flex items-center justify-between">
			<h1 class="capitalize text-2xl">{{$route.name}} Description</h1>
			<router-link :to="{name: 'home'}" class="rounded-sm back-link" :class="route.meta.bgHover">
				<icon :icon-name="'Close'"/>
			</router-link>
		</div>
	</nav>
	<div class="page-content">
		<div class="flex justify-center w-full text-5xl my-10"><p>This site is still a WIP</p></div>
		<router-view></router-view>
	</div>
</template>

<style scoped>
	@tailwind components;
	
	@layer components {
		@media (min-width: 1024px) {
			.nav-content {
				padding-left: 5rem;
				padding-right: 5rem;
				@apply py-4;
			}

			.page-content {
				padding: 0 5rem;
			}
		}

		@media (min-width: 1536px) {
			.nav-content {
				padding-left: 14rem;
				padding-right: 14rem;
				@apply py-4;
			}

			.page-content {
				padding: 0 14rem;
			}
		}
	}

</style>

<style>
	@import "./assets/base.css";

	.page-content {
		padding: 0 2rem;
	}

	#app {
		margin: 0 auto;
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
	}
</style>