<script setup lang="ts">
	import { useWorkStore } from '@/stores/WorkStore';

	const workStore = useWorkStore();
</script>

<template>
	<div>{{$route.params.slug}}</div>
</template>