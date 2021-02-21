import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Section } from "../common";
import { onPrint } from "../common/util";
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
}

const ShorterSectionOnPrint = styled(Section)`
	${onPrint(`
		margin-bottom: 0;
	`)}
`;

export const HeaderSection: FunctionComponent<IHeaderProps> = ({ header }) => {
	const { name, email, phone, location, summary } = header;

	return (
		<ShorterSectionOnPrint>
			<Header>
				<Name>{name}</Name>
				<Info>
					<InfoBlock>
						<a href={`mailto:${email}`}>{email}</a>
					</InfoBlock>
					<InfoBlock>{phone}</InfoBlock>
					<InfoBlock>{location}</InfoBlock>
				</Info>
			</Header>
			<Summary>{summary}</Summary>
		</ShorterSectionOnPrint>
	);
};
