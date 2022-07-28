import { defineStore } from 'pinia'
import { projects } from "@/assets/data/projects.json";
import type { Project } from '@/types/Project';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useProjectStore = defineStore('projectStore', {
  	state: () => {
		return { projects: projects as Project[] };
	},
	getters: {
		getprojectBySlug: (state) => {
			return (slug: string) => state.projects.find(_ => _.slug === slug);
		},
		getProjectById: (state) => {
			return (id: number) => state.projects.find(_ => _.id === id);
		},
		getProjectsBySkill: (state) => {
			return (skillId: number) => state.projects.filter(_ => _.skillIds.includes(skillId));
		}
	}
});
