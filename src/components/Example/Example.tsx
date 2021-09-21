import * as React from 'react'
import styled from 'styled-components'
import { color, space, compose, ColorProps, SpaceProps } from 'styled-system'

type SaluteProps = ColorProps & SpaceProps

const Salute = styled.span<SaluteProps>`
  box-sizing: border-box;
  padding: 1;
  ${compose(color, space)};
`

type ExampleProps = {
  title: string
}

const Example = (props: ExampleProps): React.ReactElement => {
  return (
    <Salute color="secondary" bg="primary" p="lg">
      {props.title}, this is your very first example
    </Salute>
  )
}

export default Example
