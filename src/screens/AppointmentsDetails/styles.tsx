import styled from 'styled-components/native'
import { theme } from '../../theme/theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0 24px;
  margin-bottom: 30px;
`

export const Footer = styled.View`
  padding: 20px 24px;
  margin-bottom: ${getBottomSpace()}px;
`
export const Banner = styled.ImageBackground`
  width: 100%;
  height: 234px;
`

export const Title = styled.Text`
  font-size: 28px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`
export const SubTitle = styled.Text`
  font-size: 13px;
  line-height: 21px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text400};
`
