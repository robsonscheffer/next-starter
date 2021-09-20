/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import Example from './Example'

describe('<Example />', () => {
  it('should render the component with prop', async () => {
    const { getByText } = render(<Example title="Senior" />)
    getByText('Senior', { exact: false })
  })
})
