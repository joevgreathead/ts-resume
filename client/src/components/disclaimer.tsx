import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const Disclaimer = styled.div`
	text-align: right;
	span,
	a {
		font-size: 0.75rem;
	}
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
			<span>This resume was built using TypeScript, React, Node, Webpack, and Yarn and printed to PDF in a browser. See the code on </span>
			<a href={href}>{linkText}</a>
			<span>.</span>
		</Disclaimer>
	);
};
