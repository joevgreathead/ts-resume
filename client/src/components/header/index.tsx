import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Section } from "../common";
import { onPrint } from "../common/util";
import { DisclaimerLabel, IDisclaimer } from "../disclaimer";
import { Header, Name, Summary, HeaderLink } from "./styled";

export interface ILink {
	href: string;
	linkText: string;
}

export interface IHeader {
	name: string;
	summary: string;
	links?: ILink[];
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
	const { name, links, summary } = header;

	return (
		<ShorterSectionOnPrint>
			<Header>
				<Name>{name}</Name>
				<DisclaimerLabel disclaimer={disclaimer} />
			</Header>
			<HeaderLink>
				{links?.map(({ href, linkText }: ILink) => (
					<a key={href} href={href}>
						{linkText}
					</a>
				))}
			</HeaderLink>
			<Summary>{summary}</Summary>
		</ShorterSectionOnPrint>
	);
};
