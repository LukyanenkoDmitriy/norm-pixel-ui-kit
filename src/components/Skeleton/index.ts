import { css, ExecutionContext, keyframes } from "styled-components"
import { createBorderMaskMixin } from "../../utils"

export const animationSkeleton = ({ theme }: ExecutionContext & object) => keyframes`
	0%{	
		background-color: ${theme.color["Gray 5"]};
		border-color: ${theme.color["Gray 5"]};
	}
	50%{
		background-color: ${theme.color["Gray 0"]};
		border-color: ${theme.color["Gray 0"]};
	}
	100%{
		background-color: ${theme.color["Gray 5"]};
		border-color: ${theme.color["Gray 5"]};
	}
`

export const skeletonMixin = css`
	${createBorderMaskMixin()}
	animation: ${(props) => animationSkeleton(props)} 2s ease infinite;
	pointer-events: none;
`
