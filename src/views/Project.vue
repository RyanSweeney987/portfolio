<script setup lang="ts">
	import { useRoute, useRouter } from 'vue-router';
	import { useProjectStore } from '@/stores/ProjectStore';
	import { useSkillStore } from '@/stores/SkillStore';
	import { useContentStore } from '@/stores/ContentStore';
	import { computed } from '@vue/reactivity';
	import { Pagination, Arrow } from "@egjs/flicking-plugins";
	import Profile from '@/components/Profile.vue';
	import IconButton from '@/components/icons/IconButton.vue';
	import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
	import SkillGroup from '../components/skills/SkillGroup.vue';

	const router = useRouter();
	const route = useRoute();

	const props = defineProps<{
		slug: string
	}>();

	const projectStore = useProjectStore();
	const skillStore = useSkillStore();
	const contentStore = useContentStore();
	const types = contentStore.mediaTypes;

	const plugins = [new Pagination({ type: 'bullet' }), new Arrow()];

	const project = projectStore.projects.find(_ => _.slug === props.slug);
	const content = contentStore.projectContent.find(_ => _.projectId === project?.id);

	const imgContent = content?.media.filter(_ => _.typeId === types.find(__ => __.typeName === "image")?.id);
	const youtubeContent = content?.media.filter(_ => _.typeId === types.find(__ => __.typeName === "youtube")?.id);
	const gitHubLink = content?.media.find(_ => _.typeId === types.find(__ => __.typeName === "github")?.id);

	const projectName = computed(_ => {
		return project !== undefined ? project.name : "project not found";
	});
	const projectId = computed(_ => {
		return project !== undefined ? project.id : -1;
	});
	const projectMarkdown = computed(_ => {
		return contentStore.projectContent.find(_ => _.projectId === projectId.value)?.content;
	});

	function clicked(slug: string) {
		router.push({name: "skill", params: {slug}});
	}
</script>

<template>
	<Profile class="project-profile">
		<template #profile-media>
			<div class="w-full md:w-2/3">
				<Flicking :options="{ circular: true }" :plugins="plugins">
					<div class="card-panel flicking-panel">
						<div class="test text-center border-2">This is a test</div>
					</div>
					<div class="card-panel test text-center border-2">This is a test</div>
					<div class="card-panel test text-center border-2">This is a test</div>
					<div class="card-panel test text-center border-2">This is a test</div>
					<div class="card-panel test text-center border-2">This is a test</div>
					<!-- <template #default>		
						<div class="card-panel flicking-panel" v-for="(media, index) in imgContent" :key="index">
							<img :src="`/portfolio/${content?.contentDir}/${media.source}`" :alt="media.alt"/>
						</div>
						<div class="card-panel flicking-panel" v-for="(media, index) in youtubeContent" :key="index">
							<iframe width="100%" height="auto" :src="`https://www.youtube.com/embed/${media.source}`" :title="media.alt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
					</template> -->
					<template #viewport>
						<span class="flicking-arrow-prev is-thin"></span>
						<span class="flicking-arrow-next is-thin"></span>
						<div class="flicking-pagination"></div>
					</template>
				</Flicking>
			</div>
		</template>
		<template #profile-title>
			<h1>{{projectName}}</h1>
		</template>
		<template #profile-body>
			<MarkdownRenderer v-if="projectMarkdown !== undefined" :markdown="projectMarkdown"></MarkdownRenderer>
			<h2>Skills</h2>
			<div class="flex flex-wrap w-full">
				<SkillGroup>
					<IconButton class="m-1" v-for="(skill, index) in skillStore.skills.filter(_ => project?.skillIds.find(__ => __ === _.id) !== undefined)" :key="skill.id" :bg-col="(route.meta.bgHover as string)" :icon-name="skill.icon" @on-click="clicked(skill.slug)"/>
				</SkillGroup>
			</div>
		</template>
	</Profile>
</template>

<style>
	@tailwind components;
	
	@layer components {
		.project-profile .profile-media {
			@apply flex justify-center;
		}
	}

	.test {
		width: 10rem;
		height: 10rem;
		background-color: darkslategrey;
	}
</style>