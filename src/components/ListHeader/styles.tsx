import styled from 'styled-components/native'
import { theme } from '../../theme/theme'

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 24px;
`

export const Title = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`
export const SubTitle = styled.Text`
  font-size: 13px;
  text-align: center;
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.text400};
`
