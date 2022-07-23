import { defineStore } from 'pinia';
import type { Skill } from "@/types/Skill";
import { skills } from "@/assets/data/skills.json";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useSkillStore = defineStore('skillStore', {
	state: () => {
		return {skills: skills as Skill[]};
	}
});