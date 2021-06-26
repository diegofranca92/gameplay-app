import styled from 'styled-components/native'
import { theme } from '../../theme/theme'

export const Wrapper = styled.View`
  flex-direction: row;
`
export const Container = styled.View``

export const User = styled.View`
  flex-direction: row;
`

export const Greeting = styled.Text`
  font-size: 24px;
  margin-right: 6px;
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.heading};
`

export const Username = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 24px;
`

export const Message = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
`
