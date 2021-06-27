import styled from 'styled-components/native'

import { LinearGradient } from 'expo-linear-gradient'
import { theme } from './../../theme/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  padding-top: ${getStatusBarHeight()}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-left: 24px;
  padding-right: 24px;
`
export const Title = styled.Text`
  flex: 1;
  font-family: ${theme.fonts.title700};
  font-size: 20px;
  text-align: center;
  color: ${theme.colors.heading};
`
export const ActionButton = styled.View``
