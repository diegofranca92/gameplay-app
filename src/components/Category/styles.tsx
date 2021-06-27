import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from './../../theme/theme'

export const Container = styled(LinearGradient)`
  flex: 1;
`

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 15px;
  text-align: center;
  color: ${theme.colors.heading};
`
