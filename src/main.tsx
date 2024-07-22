import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"

import App from "./components/App.tsx"
import { baseTheme } from "./styles/themes/baseTheme.ts"
import "./styles/normalize.css"
import "./styles/fonts.css"
import { BaseWrapperStyle } from "./styles/baseStyle.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={baseTheme}>
			<BaseWrapperStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
