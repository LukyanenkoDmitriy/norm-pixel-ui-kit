import { css } from "styled-components"
import { checkUnits } from "./checkers"
import { ColorName, FontWeightType, FontSizeType, LineHeightType } from "../../types"

// createBorderMaskMixin
export const createBorderMaskMixin = (sizePixel?: string) => css`
	mask-image: linear-gradient(${createLinearGradientMixin(sizePixel)}),
		linear-gradient(to left, ${createLinearGradientMixin(sizePixel)});
`

const createLinearGradientMixin = (sizePixel?: string) => {
	const size = checkUnits("2px", sizePixel)

	return css`
		transparent ${size},
		black ${size}
			calc(100% - ${size}),
		transparent calc(100% - ${size})
	`
}

// createTypographyMixin
export const createTypographyMixin = (
	fontSize?: FontSizeType,
	color?: ColorName,
	fontWeight?: FontWeightType,
	lineHeight?: LineHeightType
) => {
	return css`
		font-family: "Fairfax", sans-serif;
		font-size: ${({ theme }) => fontSize && theme.typography.fontSize[16]};
		font-weight: ${({ theme }) => fontWeight && theme.typography.fontWeight.normal};
		line-height: ${({ theme }) => lineHeight && theme.typography.lineHeight[20]};
		color: ${({ theme }) => color && theme.color["Black 0"]};
	`
}
