import styled from "styled-components";
import { onPrint } from "./util";

export const PageBreakAfter = styled.div`
  ${onPrint(`
		page-break-after: always;
	`)}
`;
