import styled from "styled-components";
import { onMobile, MOBILE_TEXT_SIZE, onPrint } from "../common/util";

export const Header = styled.div`
	width: 100%;
	border-bottom: 2px solid #000;

	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	${onMobile(`
		flex-wrap: wrap;
	`)}
`;

export const InfoBlock = styled.div`
	&:after {
		content: "  -  ";
		white-space: pre;
	}

	&:last-child:after {
		content: "";
	}

	${onMobile(`
		text-align: center;

		&:first-child {
			width: 100%;
			padding: 0.75rem;
		}

		&:after {
			content: "";
		}
	`)}
`;

export const Info = styled.div`
	padding-bottom: 3px;
	display: flex;
	justify-content: space-evenly;

	${onMobile(`
		flex-wrap: wrap;
		width: 100%;
		padding-bottom: 1rem;
	`)}
`;

export const Name = styled.div`
	font-size: 1.5rem;
	font-weight: 800;

	${onMobile(`
		text-align: center;
		width: 100%;
		font-size: 12vw;
	`)}
`;

export const Summary = styled.div`
	text-align: center;
	padding: 1.5rem 8vw 0;

	${onMobile(`
		padding: 1.5rem 1rem;
		font-size: ${MOBILE_TEXT_SIZE};
	`)}

	${onPrint(`
		padding: 1.5rem 5.5rem;
	`)}
`;
