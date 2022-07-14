<script setup lang="ts">

</script>

<template>
	<div class="flex justify-center w-full text-5xl my-10"><p>This site is still a WIP</p></div>
	<div v-if="$route.name !== 'Home'" class="mb-5">
		<router-link to="/"><h1 class="w-full text-center">&lt&lt&lt BACK &lt&lt&lt</h1></router-link>
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