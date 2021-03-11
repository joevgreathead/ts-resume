import React from "react";
import { HeaderSection } from "./components/header";
import { TechnicalSkillsSection } from "./components/technical-skills";
import { EmploymentSection } from "./components/employment";
import { EducationSection } from "./components/education";
import { VolunteerSection } from "./components/volunteer";
import { Wrapper } from "./components/common";
import { disclaimer, educationHistory, employments, header, skills, volunteerHistory } from "./data";

export const Resume = () => {
	return (
		<Wrapper>
			<HeaderSection header={header} disclaimer={disclaimer} />
			<TechnicalSkillsSection skills={skills} />
			<EmploymentSection employments={employments} />
			<EducationSection educationHistory={educationHistory} />
			<VolunteerSection volunteerHistory={volunteerHistory} />
		</Wrapper>
	);
};
