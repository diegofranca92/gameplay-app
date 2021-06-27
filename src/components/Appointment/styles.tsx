import styled from 'styled-components/native'
import { theme } from './../../theme/theme'

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
`

export const Container = styled.View`
  flex: 1;
`
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`

export const PlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Category = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 13px;
  margin-right: 24px;
  color: ${theme.colors.highlight};
`
export const Player = styled.Text`
  font-size: 13px;
  text-align: center;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.heading};
  margin-left: 7px;
  margin-right: 24px;
`

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Date = styled.Text`
  font-size: 13px;
  margin-left: 7px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.heading};
`
