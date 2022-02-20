import { h, FunctionComponent } from "preact";
import { TitledSection, SectionSummary } from "../common";

export interface IEducation {
  school: string;
  location: string;
  bullets: string[];
}

export interface IEducationSectionProps {
  educationHistory: IEducation[];
}

export const EducationSection: FunctionComponent<IEducationSectionProps> = ({
  educationHistory,
}) => {
  return (
    <TitledSection title="Education">
      {educationHistory.map((e) => {
        const { school, location, bullets } = e;
        return (
          <SectionSummary
            key={school}
            left={school}
            right={location}
            bullets={bullets}
          />
        );
      })}
    </TitledSection>
  );
};
