import { compileFromFile } from '../node_modules/json-schema-to-typescript';
import { writeFileSync } from 'fs';

async function generate() {
  	writeFileSync("../src/enums/MediaTypeEnum.ts", await compileFromFile("../src/assets/data/enums/mediatypes.json"));
  	writeFileSync("../src/enums/SkillLevelEnum.ts", await compileFromFile("../src/assets/data/enums/skilllevels.json"));
}

generate();