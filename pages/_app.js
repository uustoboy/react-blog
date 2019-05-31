import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, CenterMain } from "../components/style";
import 'antd/dist/antd.css';
const theme = {
  colors: {
    primary: '#0070f3'
  }
}
// const GlobalStyle = createGlobalStyle`
//   body,html{
//     background: red;
//   }
// `;


export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { GlobalStyle, pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
        <ThemeProvider theme={theme}>
          <Container>
            <GlobalStyle />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
    )
  }
}