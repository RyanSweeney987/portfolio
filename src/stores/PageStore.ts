import { defineStore } from "pinia";

export const usePageStore = defineStore("PageStore", {
	state: () => ({
		page: "main"
	}),
	actions: {
		setPage(pageName: string) {
			this.page = pageName;
		}
	}
});