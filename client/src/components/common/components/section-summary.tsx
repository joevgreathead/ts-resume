import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { BulletList } from "./bullet-list";

export const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SectionSummaryWrapper = styled.div`
	margin-top: 0.5rem;
	margin-bottom: 1rem;
`;

export const BoldText = styled.div`
	font-weight: 800;
`;

export interface SectionSummaryProps {
	left?: string;
	right?: string;
	bullets: string[];
}

export const SectionSummary: FunctionComponent<SectionSummaryProps> = ({ left, right, bullets, children }) => {
	return (
		<SectionSummaryWrapper>
			{(left || right) && (
				<FlexWrapper>
					<BoldText>{left}</BoldText>
					<BoldText>{right}</BoldText>
				</FlexWrapper>
			)}
			{children}
			<BulletList bullets={bullets} />
		</SectionSummaryWrapper>
	);
};
