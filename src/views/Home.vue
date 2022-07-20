<script setup lang="ts">
	import Bio from "../components/bio/Bio.vue";
	import ContentSection from "../components/ContentSection.vue";
	import WorkExperience from "../components/workexp/WorkExperience.vue";
	import Projects from "../components/projects/Projects.vue";
	import Skills from "../components/skills/Skills.vue";
</script>

<template>
	<ContentSection bg-svg="background-pattern-1" bg-col="background-1">
		<template #content>
			<Bio bg-col="background-hover-1"/>
		</template>
	</ContentSection>
	<ContentSection bg-svg="background-pattern-2" bg-col="background-2">
		<template #content>
			<Skills bg-col="background-hover-2"/>
		</template>
	</ContentSection>
	<ContentSection bg-svg="background-pattern-3" bg-col="background-3">
		<template #content>
			<WorkExperience bg-col="background-hover-3"/>
		</template>
	</ContentSection>
	<ContentSection bg-svg="background-pattern-4" bg-col="background-4">
		<template #content>
			<Projects bg-col="background-hover-4"/>
		</template>
	</ContentSection>
</template>