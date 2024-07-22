import { createGlobalStyle } from "styled-components"

export const BaseWrapperStyle = createGlobalStyle`
	hmtl, body {
		font-family: "Cloude", sans-serif;
        color: ${({ theme }) => theme.color.text.primary};
        background-color: ${({ theme }) => theme.color.background.primary};
	}
`
