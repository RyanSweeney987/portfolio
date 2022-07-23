import type { SkillLevelEnum } from "@/enums/SkillLevelEnum";

export type Skill = {
	id: number;
	name: string;
	slug: string;
	icon: string;
	skillLevelId: SkillLevelEnum;
	workIds: number[];
	projectIds: number[];
}