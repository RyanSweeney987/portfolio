import { defineStore } from 'pinia'
import { skills, skillLevels } from "@/assets/data/skills.json";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useSkillStore = defineStore('skillStore', {
	state: () => {
		return {skills, skillLevels};
	}
});