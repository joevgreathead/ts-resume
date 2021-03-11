import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Section } from "../common";
import { onPrint } from "../common/util";
import { DisclaimerLabel, IDisclaimer } from "../disclaimer";
import { Header, Name, Info, InfoBlock, Summary } from "./styled";

export interface IHeader {
	email: string;
	location?: string;
	name: string;
	phone?: string;
	summary: string;
}

export interface IHeaderProps {
	header: IHeader;
	disclaimer: IDisclaimer;
}

const ShorterSectionOnPrint = styled(Section)`
	${onPrint(`
		margin-bottom: 0;
	`)}
`;

export const HeaderSection: FunctionComponent<IHeaderProps> = ({ header, disclaimer }) => {
	const { name, email, phone, location, summary } = header;

	return (
		<ShorterSectionOnPrint>
			<Header>
				<Name>{name}</Name>
				<DisclaimerLabel disclaimer={disclaimer} />
			</Header>

			<Summary>{summary}</Summary>
		</ShorterSectionOnPrint>
	);
};
