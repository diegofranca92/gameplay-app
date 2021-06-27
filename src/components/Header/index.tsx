import React, { ReactNode } from 'react'
import { theme } from '../../theme/theme'
import { Container, Title, ActionButton } from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
  action?: ReactNode
}

export function Header({ title, action }: Props) {
  const { secondary40, heading, secondary80, secondary85, secondary100 } =
    theme.colors

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container colors={[secondary100, secondary40]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name='arrow-left' size={24} color={heading} />
      </BorderlessButton>
      <Title>{title}</Title>
      {action && <ActionButton>{action}</ActionButton>}
    </Container>
  )
}
