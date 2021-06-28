import React from 'react'
import { Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import {
  Wrapper,
  Container,
  Header,
  Title,
  Category,
  PlayerInfo,
  Player,
  Footer,
  DateInfo,
  Date
} from './styles'
import { theme } from './../../theme/theme'
import { GuildIcon } from '../GuildIcon'
import { categories } from './../../utils/categories'

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { GuildProps } from '../Guild'

export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type Props = RectButtonProps & {
  data: AppointmentProps
}

export function Appointment({ data, ...props }: Props) {
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild
  const { primary, on } = theme.colors
  return (
    <RectButton {...props}>
      <Wrapper>
        <GuildIcon />

        <Container>
          <Header>
            <Title>{data.guild.name}</Title>
            <Category>{category.title}</Category>
          </Header>
          <Footer>
            <DateInfo>
              <CalendarSvg />
              <Date>{data.date}</Date>
            </DateInfo>
            <PlayerInfo>
              <PlayerSvg fill={owner ? primary : on} />
              <Player style={{ color: owner ? primary : on }}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Player>
            </PlayerInfo>
          </Footer>
        </Container>
      </Wrapper>
    </RectButton>
  )
}
