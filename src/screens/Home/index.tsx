import React from 'react'
import { Profile } from '../../components/Profile'

import { Header, Container, Wrapper } from './styles'

export function Home() {
  return (
    <Wrapper>
      <Header></Header>
      <Profile />
    </Wrapper>
  )
}
