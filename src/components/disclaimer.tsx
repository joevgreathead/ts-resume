import { text } from "body-parser";
import { h, FunctionComponent } from "preact";
import styled from "styled-components";
import { ExternalLink } from "./common/components";
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

interface ILink {
  href: string;
  linkText: string;
}

export interface IDisclaimer {
  tech: ILink[];
  source: ILink;
}

interface IDisclaimerLabelProps {
  disclaimer: IDisclaimer;
}

export const DisclaimerLabel: FunctionComponent<IDisclaimerLabelProps> = ({
  disclaimer: { tech, source },
}) => {
  return (
    <Disclaimer>
      <span>This resume was built using </span>
      {tech.map(({ href, linkText }, i, arr) => {
        if (i === 0) {
          return [<ExternalLink key={href} href={href} text={linkText} />];
        }
        return [
          i === arr.length - 1 ? <span>, and </span> : <span>, </span>,
          <ExternalLink key={href} href={href} text={linkText} />,
        ];
      })}
      <span>. See the code on </span>
      <ExternalLink href={source.href} text={source.linkText} />
      <span>.</span>
    </Disclaimer>
  );
};
