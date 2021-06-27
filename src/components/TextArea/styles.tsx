import styled from 'styled-components/native'
import { theme } from '../../theme/theme'

export const Wrapper = styled.TextInput`
  width: 100%;
  height: 95px;
  border-radius: 8px;
  font-size: 13px;
  margin-right: 4px;
  margin-bottom: 18px;
  text-align: center;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text400};
  background-color: ${theme.colors.secondary40};
`
