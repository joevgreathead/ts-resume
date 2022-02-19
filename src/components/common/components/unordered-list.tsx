import styled from "styled-components";
import { onPrint } from "../util";

export const UnorderedList = styled.ul`
	${onPrint(`
		padding-inline-start: 2rem;
	`)}
`;
