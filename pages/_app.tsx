import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider defaultTheme="system">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
