import { h } from "preact";
import { HeaderSection } from "./components/header";
import { TechnicalSkillsSection } from "./components/technical-skills";
import { EmploymentSection } from "./components/employment";
import { EducationSection } from "./components/education";
import { VolunteerSection } from "./components/volunteer";
import { Wrapper } from "./components/common";
import {
  disclaimer,
  educationHistory,
  employments,
  header,
  skills,
  volunteerHistory,
} from "./data";
import { PageBreakAfter } from "./components/common/page-break-after";
import { Head } from "./head";

export const Resume = () => {
  return (
    <div>
      <Head />
      <Wrapper>
        <HeaderSection header={header} disclaimer={disclaimer} />
        <TechnicalSkillsSection skills={skills} />
        <PageBreakAfter>
          <EmploymentSection employments={employments} />
        </PageBreakAfter>
        <EducationSection educationHistory={educationHistory} />
        <VolunteerSection volunteerHistory={volunteerHistory} />
      </Wrapper>
    </div>
  );
};
