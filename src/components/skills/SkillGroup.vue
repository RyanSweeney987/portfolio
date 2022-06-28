<script setup lang="ts">
defineProps<{
	title: string
}>()
</script>

<template>
	<h1 class="text-3xl mb-4 text-white w-100 text-center">{{title}}</h1>

	<div class="flex flex-wrap justify-center ">
		<slot></slot>
	</div>
</template>