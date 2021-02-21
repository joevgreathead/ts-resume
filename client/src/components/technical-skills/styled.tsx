import styled from "styled-components";
import { UnorderedList } from "../common";
import { onMobile, MOBILE_TEXT_SIZE, onPrint } from "../common/util";

export const SkillsList = styled(UnorderedList)`
	margin-top: 0.5rem;
	column-count: 2;

	${onMobile(`
		height: auto;
		column-count: 1;
	`)}
`;

export const Skill = styled.li`
	${onMobile(`
		padding: 0.25rem;
		font-size: ${MOBILE_TEXT_SIZE};
	`)}
`;
