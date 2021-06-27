import React from 'react'
import { Header } from '../../components/Header'

import { Background } from '../../components/Background'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton, FlatList } from 'react-native-gesture-handler'
import { BannerContent, Banner, Title, SubTitle, Footer } from './styles'
import { theme } from '../../theme/theme'

import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

export function AppointmentsDetails() {
  const members = [
    {
      id: '1',
      username: 'Diego',
      avatar_url: 'https://github.com/diegofranca92.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Diego',
      avatar_url: 'https://github.com/diegofranca92.png',
      status: 'off'
    },
    {
      id: '3',
      username: 'Diego',
      avatar_url: 'https://github.com/diegofranca92.png',
      status: 'online'
    },
    {
      id: '4',
      username: 'Diego',
      avatar_url: 'https://github.com/diegofranca92.png',
      status: 'off'
    }
  ]

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          <BorderlessButton>
            <Fontisto name='share' size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <Banner source={BannerImg}>
        <BannerContent>
          <Title>Lendários</Title>
          <SubTitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </SubTitle>
        </BannerContent>
      </Banner>
      <ListHeader title='Jogadores' subtitle='Total 3' />
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={{
          marginLeft: 24,
          marginTop: 24
        }}
      />
      <Footer>
        <ButtonIcon title='Entrar na partida' />
      </Footer>
    </Background>
  )
}
