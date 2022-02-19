import styled from "styled-components";
import { UnorderedList } from "../common";
import { onMobile, MOBILE_TEXT_SIZE, onPrint } from "../common/util";

export const SkillsList = styled(UnorderedList)`
	margin-top: 0.5rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	${onMobile(`
		height: auto;
	`)}
`;

export const Skill = styled.li`
	width: 50%;

	${onMobile(`
		padding: 0.25rem;
		font-size: ${MOBILE_TEXT_SIZE};
		width: 100%;
	`)}
`;
