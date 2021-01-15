export const MAX_WIDTH: number = 500;
export const MOBILE_TEXT_SIZE = "4.5vw";

export const onMobile = (styles: string) => `
	@media (max-width: ${MAX_WIDTH}px) {
		${styles}
	}
`;

export const onPrint = (styles: string) => `
	@media print {
		${styles}
	}
`;
