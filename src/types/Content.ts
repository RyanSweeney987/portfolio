import type { Media } from "./Media";

export interface Content {
	id: number;
	projectId: number;
	workExpId: number;
	media: Media[];
	contentDir: string;
	content: string;
};