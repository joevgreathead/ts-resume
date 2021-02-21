import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { onMobile } from "../util";

export const Section = styled.div`
	margin-bottom: 1rem;
`;

export const Title = styled.div`
	border-bottom: 2px solid #000;
	padding-bottom: 3px;
	font-weight: 800;

	${onMobile(`
		font-size: 6vw;
		text-align: center;
	`)}
`;

export interface TitledSectionProps {
	title: string;
}

export const TitledSection: FunctionComponent<TitledSectionProps> = ({ title, children }) => {
	return (
		<Section>
			<Title>{title}</Title>
			{children}
		</Section>
	);
};
