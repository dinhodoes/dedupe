import React from "react"
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react"
import "../styles/globals.css"

interface AppProps {
  Component: React.ComponentType
  pageProps: any
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
