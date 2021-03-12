import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { onMobile } from "./common/util";

export const Disclaimer = styled.div`
	text-align: right;
	span,
	a {
		font-size: 0.75rem;
	}

	${onMobile(`
		text-align: center;
		margin: 1rem;
		font-size: 1rem;
	`)}
`;

export interface IDisclaimer {
	href: string;
	linkText: string;
}

interface IDisclaimerLabelProps {
	disclaimer: IDisclaimer;
}

export const DisclaimerLabel: FunctionComponent<IDisclaimerLabelProps> = ({ disclaimer: { href, linkText } }) => {
	return (
		<Disclaimer>
			<span>This resume was built using TypeScript, React, and Node.js. See the code on </span>
			<a href={href}>{linkText}</a>
			<span>.</span>
		</Disclaimer>
	);
};
