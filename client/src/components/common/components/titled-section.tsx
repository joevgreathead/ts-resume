import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { onMobile } from "../util";

export const Section = styled.div`
	margin-bottom: 1.5rem;
`;

export const Title = styled.div`
	border-bottom: 1px solid #ccc;
	padding-bottom: 3px;
	font-weight: 800;
	font-size: 1.25rem;

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
