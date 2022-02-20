import { h, FunctionComponent } from "preact";

interface ExternalLinkProps {
  href: string;
  text: string;
}

export const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
  href,
  text,
}) => (
  <a href={href} target="_blank" rel="noopener noreferer">
    {text}
  </a>
);
