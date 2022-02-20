import { h, FunctionComponent } from "preact";
import { FlexWrapper, SectionSummary, TitledSection } from "../common";

export interface IEmployment {
  company?: string;
  bullets: string[];
  endDate?: string;
  location?: string;
  position: string;
  startDate: string;
}

export interface IEmploymentSectionProps {
  employments: IEmployment[];
}

export const EmploymentSection: FunctionComponent<IEmploymentSectionProps> = ({
  employments,
}) => {
  return (
    <TitledSection title="Experience">
      {employments.map((e) => {
        const { company, location, position, startDate, endDate, bullets } = e;
        return (
          <SectionSummary
            key={`${company}-${startDate}`}
            left={company}
            right={location}
            bullets={bullets}
          >
            <FlexWrapper>
              <div>{position}</div>
              <div>
                {startDate} - {endDate ?? "Present"}
              </div>
            </FlexWrapper>
          </SectionSummary>
        );
      })}
    </TitledSection>
  );
};
