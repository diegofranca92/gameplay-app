import React from 'react'
import { Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Container, Title } from './styles'
import { theme } from './../../theme/theme'
import discordIcon from '../../assets/discord.png'

export function GuildIcon() {
  const uri =
    'https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj'
  return (
    <Image
      source={{ uri }}
      resizeMode='cover'
      style={{ width: 64, height: 64, borderRadius: 8, marginRight: 20 }}
    />
  )
}
