import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider defaultTheme="dark">
      <Head>
        <title>Antariksh Verma - Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
