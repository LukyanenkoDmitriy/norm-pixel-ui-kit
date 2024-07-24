import { FontSizeType, FontWeightType, LineHeightType, TypographyType } from "../../../types/themes"

const fontSize: FontSizeType = {
	12: "12px",
	14: "14px",
	16: "16px", // Main
	18: "18px",
	22: "22px",
	28: "28px",
	32: "32px",
	36: "36px",
	42: "42px"
}

const fontWeight: FontWeightType = {
	normal: 500, // Main
	bold: 700
}

const lineHeight: LineHeightType = {
	16: "16px",
	20: "20px", // Main
	24: "24px",
	28: "28px",
	36: "36px",
	40: "40px",
	44: "44px",
	52: "52px"
}

export const typography: TypographyType = {
	fontSize: fontSize,
	fontWeight: fontWeight,
	lineHeight: lineHeight
}
