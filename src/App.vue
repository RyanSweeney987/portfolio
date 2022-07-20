<script setup lang="ts">
import { useRoute } from "vue-router";
import Icon from "./components/icons/Icon.vue";

const route = useRoute();
</script>

<template>
	<nav v-if="$route.name !== 'home'" class="w-full mb-5 pb-0.5 shadow-xl sticky top-0 z-10" :class="route.meta.bg">
		<div class="nav-content p-4 bg-slate-800 flex items-center justify-between" :class="route.meta.bgPattern">
			<h1 class="capitalize text-2xl">{{$route.name}} Description</h1>
			<router-link :to="{name: 'home'}" class="rounded-sm back-link" :class="route.meta.bgHover">
				<icon :icon-name="'Close'"/>
			</router-link>
		</div>
	</nav>
	<div class="page-content">
		<div class="flex justify-center w-full text-5xl my-10"><p>This site is still a WIP</p></div>
		<router-view></router-view>
		<div class="pt-20 pb-5">
			<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/" class="text-center">
				<a property="dct:title" rel="cc:attributionURL" href="https://ryansweeney987.github.io/portfolio/#/" class="link">Portfolio</a> by 
				<span property="cc:attributionName">Ryan Sweeney</span> is licensed under 
				<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" class="link text-center">CC BY-NC-SA 4.0
					<span class="flex justify-center">				
						<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">
						<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">
						<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1">
						<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1">
					</span>	
				</a>
			</p> 
		</div>
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
		width: 100%;
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