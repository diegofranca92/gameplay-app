import styled from 'styled-components/native'
import { theme } from './../../theme/theme'

export const Container = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.line};
`

export const Title = styled.Text`
  flex: 1;
  font-size: 15px;
  text-align: center;
  color: ${theme.colors.heading};
`
