import React from "react"
import "../styles/globals.css"

interface MyAppProps {
  Component: React.ComponentType
  pageProps: any
}

function MyAppTest({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />
}

export default MyAppTest
