import { Fragment, ReactElement } from 'react'
import type { AppProps } from 'next/app'

import { GlobalStyles, ThemeProvider } from '@/themes'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}
export default MyApp
