import styled from 'styled-components/native'
import { theme } from '../../theme/theme'

export const Form = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: 32px;
`

export const Footer = styled.View`
  padding: 0 20px;
  margin-bottom: 56px;
`
export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-between;
`
export const FieldBody = styled.View``
export const TextAreaLabel = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Col = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 18px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.highlight};
`

export const Select = styled.View`
  width: 100%;
  height: 68px;
  flex-direction: row;
  border: 1px solid ${theme.colors.secondary50};
  border-radius: 8px;
  align-items: center;
  padding-right: 25px;
  overflow: hidden;
`
export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`
export const ImageEmpty = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${theme.colors.secondary50};
  border-radius: 8px;
`
export const Label = styled.Text`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`

export const LimitLabel = styled.Text`
  font-size: 13px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text400};
`

export const SubTitle = styled.Text`
  font-size: 13px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text400};
`
