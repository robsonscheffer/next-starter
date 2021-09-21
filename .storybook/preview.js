import { Fragment } from 'react'
import { addDecorator } from '@storybook/react'
import { GlobalStyles, ThemeProvider } from '@/themes'

export const decorators = [
  Story => (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </Fragment>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
