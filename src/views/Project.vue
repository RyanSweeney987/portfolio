<script setup lang="ts">
	import { useProjectStore } from '@/stores/ProjectStore';

	const projectStore = useProjectStore();
</script>

<template>
	<div>{{$route.params.slug}}</div>
</template>