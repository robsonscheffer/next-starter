import * as React from 'react'
import styled from 'styled-components'

const Salute = styled.span`
  color: #808080;
`

type ExampleProps = {
  title: string
}

const Example = (props: ExampleProps): React.ReactElement => {
  return <Salute>{props.title}, this is your very first example</Salute>
}

export default Example
