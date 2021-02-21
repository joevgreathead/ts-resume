import React, { FunctionComponent } from "react";
import { FlexWrapper, SectionSummary, TitledSection } from "../common";

export interface IEmployment {
	company: string;
	bullets: string[];
	endDate?: string;
	location: string;
	position: string;
	startDate: string;
}

export interface IEmploymentSectionProps {
	employments: IEmployment[];
}

export const EmploymentSection: FunctionComponent<IEmploymentSectionProps> = ({ employments }) => {
	return (
		<TitledSection title="Employment History">
			{employments.map((e) => {
				const { company, location, position, startDate, endDate, bullets } = e;
				return (
					<SectionSummary key={company} left={company} right={location} bullets={bullets}>
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
