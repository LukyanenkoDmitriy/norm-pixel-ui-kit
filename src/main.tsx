import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"

import App from "./components/App.tsx"

import { GlobalStyle, lightTheme } from "./styles"
import "./styles/normalize.css"
import "./styles/fonts.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
