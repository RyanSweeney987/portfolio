import { defineStore } from 'pinia'
import { projectContent } from "@/assets/data/projectcontent.json";
import { workExpContent } from "@/assets/data/workexpcontent.json";


// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useContentStore = defineStore('contentStore', {
  	state: () => {
		return { projectContent, workExpContent };
	}
});
