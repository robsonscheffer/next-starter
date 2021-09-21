import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import * as React from 'react'
import theme from './default'

export interface LayoutProps {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: LayoutProps): React.ReactElement => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
export type Theme = typeof theme

export { ThemeProvider }

export default theme
