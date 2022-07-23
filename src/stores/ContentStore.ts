import { defineStore } from 'pinia'
import { projectContent } from "@/assets/data/projectcontent.json";
import { workExpContent } from "@/assets/data/workexpcontent.json";
import type { Content } from '@/types/Content';
// import * as mediaTypesEnum from "@/assets/data/mediatypes.json";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useContentStore = defineStore('contentStore', {
  	state: () => {
		return { 
			projectContent: projectContent as Content[], 
			workExpContent: workExpContent as Content[] 
		};
	}
});
