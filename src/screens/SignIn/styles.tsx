import styled from 'styled-components/native'
import { theme } from './../../theme/theme'

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Container = styled.View`
  margin-top: -40px;
  padding: 0 30px;
`

export const Title = styled.Text`
  color: ${theme.colors.heading};
  font-size: 40px;
  margin-bottom: 16px;
  text-align: center;
  font-family: ${theme.fonts.title700};
  line-height: 40px;
`
export const Subtitle = styled.Text`
  color: ${theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
  font-family: ${theme.fonts.title500};
  line-height: 25px;
`
