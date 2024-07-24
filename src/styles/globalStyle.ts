import { createGlobalStyle } from "styled-components"
import { createTypographyMixin } from "../utils"

export const GlobalStyle = createGlobalStyle`
	hmtl, body {
		${createTypographyMixin()}
        background-color: ${({ theme }) => theme.color["Blue 0"]};

		*::selection {
			background-color: ${({ theme }) => theme.color["Light Blue 0"]};
		}
	}
`
