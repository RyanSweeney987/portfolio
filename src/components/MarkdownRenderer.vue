<script setup lang="ts">
import MarkdownIt from "markdown-it";
import MarkdownItAttrs from "markdown-it-attrs";
import { computed } from "vue";

const mark = new MarkdownIt();
mark.use(MarkdownItAttrs);

const props = defineProps<{
	markdown: string
}>();

const content = computed(() => {
	return mark.render(props.markdown);
	// let result: string[] = [];
	// let splitStrings = props.markdown.split("\n");
	// splitStrings.forEach(line => {
	// 	result.push(mark.render(line));
	// });
	// return result;
});
</script>

<template>
<div class="markdown-container">
	<div v-html="content"></div>
	<!-- <div v-for="(line, index) in content" v-html="line"></div> -->
</div>
</template>

<style scoped>

</style>