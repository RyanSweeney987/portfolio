import type { MediaType } from "@/enums/MediaTypeEnum";

export type Media = {
	typeId: MediaType;
	source: string;
	alt: string;
};