import type { MediaType } from "@/enums/MediaTypeEnum";

export interface Media{
	typeId: MediaType;
	source: string;
	alt: string;
};