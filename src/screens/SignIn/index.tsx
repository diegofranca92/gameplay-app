import React from 'react'
import { Image } from 'react-native'
import { ButtonIcon } from '../../components/ButtonIcon'

import imgGame from '../../assets/illustration.png'

import { Wrapper, Container, Title, Subtitle } from './styles'
import { useNavigation } from '@react-navigation/core'

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <Wrapper>
      <Image
        source={imgGame}
        resizeMode='stretch'
        style={{ width: '100%', height: 300 }}
      />
      <Container>
        <Title>
          Conecte-se {`\n`} e organize suas {`\n`}
          jogatinas
        </Title>
        <Subtitle>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Subtitle>
        <ButtonIcon title='Entrar com Discord' onPress={handleSignIn} />
      </Container>
    </Wrapper>
  )
}
