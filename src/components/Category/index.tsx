import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Container, Title } from './styles'
import { theme } from './../../theme/theme'
import discordIcon from '../../assets/discord.png'
import { SvgProps } from 'react-native-svg'
import { View } from 'react-native'

type Props = RectButtonProps & {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...props
}: Props) {
  const { secondary80, secondary100 } = theme.colors

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
        <View
          style={[
            {
              width: 100,
              height: 116,
              backgroundColor: theme.colors.secondary40,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 7
            },
            { opacity: checked ? 1 : 0.4 }
          ]}>
          <View
            style={
              checked
                ? {
                    width: 10,
                    height: 10,
                    alignSelf: 'flex-end',
                    marginRight: 7,
                    borderRadius: 3,
                    backgroundColor: theme.colors.primary
                  }
                : {
                    width: 10,
                    height: 10,
                    alignSelf: 'flex-end',
                    backgroundColor: theme.colors.secondary100,
                    marginRight: 7,
                    borderRadius: 3,
                    borderWidth: 2,
                    borderColor: theme.colors.secondary50
                  }
            }
          />
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </View>
      </Container>
    </RectButton>
  )
}
