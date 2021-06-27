import styled from 'styled-components/native'
import { theme } from '../../theme/theme'

export const Container = styled.ScrollView`
  min-height: 120px;
  max-height: 120px;
  padding-left: 24px;
`

export const Title = styled.Text`
  flex: 1;
  font-size: 15px;
  text-align: center;
  color: ${theme.colors.heading};
`
