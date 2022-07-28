import { defineStore } from 'pinia'
import { projectContent } from "@/assets/data/projectcontent.json";
import { workExpContent } from "@/assets/data/workexpcontent.json";
import type { Content } from '@/types/Content';
import { ContentType } from '@/enums/ContentTypeEnum';
import type { MediaType } from '@/enums/MediaTypeEnum';
// import * as mediaTypesEnum from "@/assets/data/mediatypes.json";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useContentStore = defineStore('contentStore', {
  	state: () => {
		return { 
			projectsContent: projectContent as Content[], 
			worksContent: workExpContent as Content[] 
		};
	},
	getters: {
		getContentById: (state) => {
			return (contentType: ContentType, id: number) => {
				if(contentType === ContentType.Project) {
					return state.projectsContent.find(_ => _.id === id);
				} else if(contentType === ContentType.Work) {
					return state.worksContent.find(_ => _.id === id);
				}
			}
		}
	}
});
