import React, { useState } from 'react'
import { CategorySelect } from '../../components/CategorySelect'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Profile } from '../../components/Profile'

import { Header, Wrapper } from './styles'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { FlatList } from 'react-native'
import { ListDivider } from '../../components/ListDivider'
import { useNavigation } from '@react-navigation/core'

export function Home() {
  const [category, setCategory] = useState('')
  const navigation = useNavigation()

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleSelectCategory(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentsDetails() {
    navigation.navigate('AppointmentsDetails')
  }
  function handleAppointmentsCreate() {
    navigation.navigate('AppointmentsCreate')
  }

  return (
    <Wrapper>
      <Header>
        <Profile />
        <ButtonAdd onPress={handleAppointmentsCreate} />
      </Header>
      <CategorySelect
        categorySelected={category}
        setCategory={handleSelectCategory}
      />
      <ListHeader title='Partidas agendadas' subtitle='Total 6' />

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointment onPress={handleAppointmentsDetails} data={item} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 24,
          marginLeft: 24
        }}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </Wrapper>
  )
}
