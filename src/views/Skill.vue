<script setup lang="ts">
	import { computed } from 'vue'
	import sourceData from "@/assets/data/routes.json";

	import { useSkillStore } from '@/stores/SkillStore';

	const routes = sourceData.routes;

	const skillStore = useSkillStore();
</script>

<template>
	<div>{{$route.params.slug}}</div>
</template>