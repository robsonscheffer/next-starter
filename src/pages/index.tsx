import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Example } from '@/components'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Example title="Hello" />
    </Fragment>
  )
}

export default Home
