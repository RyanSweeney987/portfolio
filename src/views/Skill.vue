<script setup lang="ts">
	import { useSkillStore } from '@/stores/SkillStore';
	const skillStore = useSkillStore();
</script>

<template>
	<div>{{$route.params.slug}}</div>
</template>