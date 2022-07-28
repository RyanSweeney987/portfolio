import type { SkillLevelEnum } from "@/enums/SkillLevelEnum";

export interface Skill {
	id: number;
	name: string;
	slug: string;
	icon: string;
	skillLevelId: SkillLevelEnum;
	workIds: number[];
	projectIds: number[];
}