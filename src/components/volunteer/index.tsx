import React, { FunctionComponent } from "react";
import { TitledSection, SectionSummary, FlexWrapper } from "../common";

export interface IVolunteer {
	bullets: string[];
	endDate?: string;
	location: string;
	organization: string;
	position: string;
	startDate: string;
}

export interface IVolunteerSectionProps {
	volunteerHistory: IVolunteer[];
}

export const VolunteerSection: FunctionComponent<IVolunteerSectionProps> = ({ volunteerHistory }) => {
	return (
		<TitledSection title="Volunteer Experience">
			{volunteerHistory.map((v) => {
				const { organization, location, position, startDate, endDate, bullets } = v;
				return (
					<SectionSummary key={organization} left={organization} right={location} bullets={bullets}>
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
