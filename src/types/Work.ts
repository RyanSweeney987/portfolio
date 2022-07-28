import type { Experience } from "./Experience";

export interface Work extends Experience {
	startDate: string;
	endDate: string;
	workTitle: string;
}