<script setup lang="ts">
defineProps<{
	title?: string
}>()
</script>

<template>
	<h1 class="text-3xl mb-4 text-white w-full text-center" v-if="title !== undefined">{{title}}</h1>
	<div class="flex flex-wrap justify-center ">
		<slot></slot>
	</div>
</template>