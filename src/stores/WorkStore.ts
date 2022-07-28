import { defineStore } from 'pinia'
import { workexp } from "@/assets/data/workexp.json";
import type { Work } from '@/types/Work';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useWorkStore = defineStore('workStore', {
	state: () => {
		return { works: workexp as Work[] };
	},
	getters: {
		getWorkBySlug: (state) => {
			return (slug: string) => state.works.find(_ => _.slug === slug);
		},
		getWorkById: (state) => {
			return (id: number) => state.works.find(_ => _.id === id);
		},
		getWorksBySkill: (state) => {
			return (skillId: number) => state.works.filter(_ => _.skillIds.includes(skillId));
		}
	}
});