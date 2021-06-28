import styled from 'styled-components/native'
import { theme } from '../../theme/theme'

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`
export const Container = styled.View`
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
  margin-bottom: 4px;
`

export const TypeUser = styled.Text`
  font-size: 13px;
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.text400};
  margin-bottom: 12px;
`
