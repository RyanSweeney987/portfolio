<script setup lang="ts">
import IconButton from "./components/icons/IconButton.vue";
import Icon from "./components/icons/Icon.vue";


</script>

<template>
	<div class="flex justify-center w-full text-5xl my-10"><p>This site is still a WIP</p></div>
	<div><p>Current page: <span>{{ $route.path }}</span></p></div>
	<router-link to="/">Home</router-link> |
	<router-link to="/skill/cplusplus">Skill</router-link> |
	<router-link to="/work/cerebreon-technologies">Work</router-link> |
	<router-link to="/project/city-generator">Project</router-link>

	<div>{{ $route.name }}</div>
	<div v-if="$route.name !== 'Home'">
		<router-link to="/"><icon icon-name="CPlusPlus"/></router-link>
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

	@media (min-width: 1024px) {
		body {
			display: flex;
			place-items: center;
		}

		#app {
			padding: 0 14rem;
		}
	}
</style>