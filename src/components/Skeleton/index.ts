import { css, keyframes } from "styled-components"

export const animationSkeleton = keyframes`
	0%{
		background-color: ${({ theme }) => theme.color.neutral.primary};
	}
    25%{
		background-color: ${({ theme }) => theme.color.neutral.secondary};
	}
	50%{
		background-color: ${({ theme }) => theme.color.neutral.tertiary};
	}
    75%{
		background-color: ${({ theme }) => theme.color.neutral.secondary};
	}
	100%{
		background-color: ${({ theme }) => theme.color.neutral.primary};
	}
`

export const skeletonMixin = css`
	animation: ${animationSkeleton} 2s ease infinite;
	pointer-events: none;
`
