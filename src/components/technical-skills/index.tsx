import React, { FunctionComponent } from "react";
import { TitledSection } from "../common";
import { SkillsList, Skill } from "./styled";

export interface TechnicalSkillsProps {
	skills: string[];
}

export const TechnicalSkillsSection: FunctionComponent<TechnicalSkillsProps> = ({ skills }) => {
	return (
		<TitledSection title={"Technical Profile"}>
			<SkillsList>
				{skills.map((skill: string) => {
					return <Skill key={skill}>{skill}</Skill>;
				})}
			</SkillsList>
		</TitledSection>
	);
};
