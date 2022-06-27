<script setup lang="ts">
	// defineProps<{
	// 	name: string,
	// 	languages: Array<string>,
	// 	frameworks: Array<string>
	// }>()
</script>

<template>
	<div>
		<h1><slot name="title"></slot></h1>
		<p><slot name="languages"></slot></p>
		<p><slot name="frameworks"></slot></p>
	</div>
</template>

