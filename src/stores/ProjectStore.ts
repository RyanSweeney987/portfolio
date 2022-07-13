import { defineStore } from "pinia";

export const useProjectStore = defineStore("ProjectStore", {
	state: () => ({
		page: 0
	})
});