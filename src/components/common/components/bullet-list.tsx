import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { UnorderedList } from "./unordered-list";

const BulletListUl = styled(UnorderedList)`
	margin-bottom: 0;
	margin-top: 0;
`;

export interface BulletListProps {
	bullets: string[];
}

export const BulletList: FunctionComponent<BulletListProps> = ({ bullets }) => {
	return (
		<BulletListUl>
			{bullets.map((b) => {
				return <li key={b}>{b}</li>;
			})}
		</BulletListUl>
	);
};
