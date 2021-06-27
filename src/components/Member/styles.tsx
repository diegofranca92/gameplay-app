import styled from 'styled-components/native'
import { theme } from '../../theme/theme'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const MemberContent = styled.View``
export const Icon = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-right: 9px;
`

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`
export const SubTitle = styled.Text`
  font-size: 13px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text400};
`
