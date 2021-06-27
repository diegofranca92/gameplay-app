import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Container, Title } from './styles'
import { theme } from './../../theme/theme'
import discordIcon from '../../assets/discord.png'
import { SvgProps } from 'react-native-svg'
import { View } from 'react-native'
import { Inter_700Bold } from '@expo-google-fonts/inter'

type Props = RectButtonProps & {
  title: string
  icon: React.FC<SvgProps>
  hasCheckBox?: boolean
  checked?: boolean
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...props
}: Props) {
  const { secondary40, secondary50, secondary80, secondary85, secondary100 } =
    theme.colors

  return (
    <RectButton
      {...props}
      style={{
        width: 104,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginRight: 8
      }}>
      <Container colors={[secondary80, secondary100]}>
        <Container
          colors={[checked ? secondary85 : secondary50, secondary40]}
          style={[
            {
              width: 100,
              height: 116,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 20
            },
            { opacity: checked ? 1 : 0.5 }
          ]}>
          {hasCheckBox && (
            <View
              style={
                checked
                  ? {
                      position: 'absolute',
                      width: 10,
                      height: 10,
                      top: 7,
                      right: 7,
                      borderRadius: 3,
                      backgroundColor: theme.colors.primary
                    }
                  : {
                      position: 'absolute',
                      width: 10,
                      height: 10,
                      top: 7,
                      right: 7,
                      backgroundColor: theme.colors.secondary100,
                      borderRadius: 3,
                      borderWidth: 2,
                      borderColor: theme.colors.secondary50
                    }
              }
            />
          )}
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </Container>
      </Container>
    </RectButton>
  )
}
