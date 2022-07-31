import type { Experience } from "./Experience";

export interface Work extends Experience {
	startDate: string;
	endDate?: string;
	isCurrent: boolean;
	workTitle: string;
}