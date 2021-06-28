import React from 'react'
import { FlatList, View } from 'react-native'
import { ListDivider } from '../../components/ListDivider'
import { Guild, GuildProps } from '../../components/Guild'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendarios',
      icon: 'image.png',
      owner: true
    }
  ]
  return (
    <View style={{ flex: 1, paddingTop: 24, alignItems: 'center' }}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
        contentContainerStyle={{
          paddingBottom: 70
        }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
      />
    </View>
  )
}
