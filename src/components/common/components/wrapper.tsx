import styled from "styled-components";
import { onMobile, onPrint } from "../util";

export const Wrapper = styled.div`
	margin: 0 auto;

	padding: 3rem 6rem 2rem;
	width: 100vw;
	max-width: 900px;

	${onMobile(`
		padding: 2rem;
	`)}

	${onPrint(`
		width: 100%;
		display: box;
		padding: 3rem 3rem 0;
	`)}
`;
