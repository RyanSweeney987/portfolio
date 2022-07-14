<script setup lang="ts">
	import { useWorkStore } from '@/stores/WorkStore';
	const workStore = useWorkStore();

	function capitalizeFirstLetter(inStr: string) {
		inStr = inStr.replaceAll("-", " ");

		let result = "";
		inStr.split(" ").forEach(subStr => {
			result += subStr.charAt(0).toUpperCase() + subStr.slice(1) + " ";
		});
		return result.trimEnd();
	}
</script>

<template>
	<h1 class="w-full text-center">This page will display further information about the work at <span class="text-4xl font-bold italic">{{capitalizeFirstLetter($route.params.slug.toString())}}</span>.</h1>
	<h1 class="w-full text-center">This will include links to skills used in the work.</h1>
</template>