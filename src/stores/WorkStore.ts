import { defineStore } from "pinia";

export const useWorkStore = defineStore("WorkStore", {
	state: () => ({
		page: "main"
	})
});