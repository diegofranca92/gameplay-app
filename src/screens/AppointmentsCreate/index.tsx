import React, { useState } from 'react'
import { Header } from '../../components/Header'

import { Background } from '../../components/Background'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import {
  Form,
  Select,
  Label,
  SelectBody,
  ImageEmpty,
  Footer,
  Field,
  FieldBody,
  Col,
  Divider,
  LimitLabel
} from './styles'
import { theme } from '../../theme/theme'

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native'
import { InputSmall } from '../../components/InputSmall'
import { TextArea } from '../../components/TextArea'
import { GuildIcon } from '../../components/GuildIcon'
import { CategorySelect } from '../../components/CategorySelect'
import { Button } from '../../components/Button'
import { ModalView } from '../../components/ModalView'
import { Guilds } from '../Guilds'
import { GuildProps } from 'src/components/Guild'

export function AppointmentsCreate() {
  const [category, setCategory] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  function handleOpenModalGuilds() {
    setOpenModal(true)
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect)
    setOpenModal(false)
  }

  return (
    <Background>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Header title='Agendar partida' />
        <ScrollView>
          <Label style={{ marginLeft: 24, marginTop: 24 }}>Categoria</Label>
          <CategorySelect
            categorySelected={category}
            setCategory={setCategory}
            hasCheckBox
          />

          <Form>
            <RectButton onPress={handleOpenModalGuilds}>
              <Select>
                {guild.icon ? <GuildIcon /> : <ImageEmpty />}
                <SelectBody>
                  <Label>
                    {guild.name ? guild.name : ' Selecione um servidor'}
                  </Label>
                </SelectBody>
                <Feather
                  name='chevron-right'
                  size={18}
                  color={theme.colors.heading}
                />
              </Select>
            </RectButton>
            <Field>
              <FieldBody>
                <Label>Dia e mês</Label>
                <Col>
                  <InputSmall maxLength={2} />
                  <Divider>/</Divider>
                  <InputSmall maxLength={2} />
                </Col>
              </FieldBody>
              <FieldBody>
                <Label>Hora e minuto</Label>
                <Col>
                  <InputSmall maxLength={2} />
                  <Divider>:</Divider>
                  <InputSmall maxLength={2} />
                </Col>
              </FieldBody>
            </Field>
            <Field>
              <Label>Hora e minuto</Label>
              <LimitLabel>Max 100 caracteres</LimitLabel>
            </Field>
            <TextArea
              multiline
              numberOfLines={5}
              autoCorrect={false}
              maxLength={100}
            />
          </Form>

          <Footer>
            <Button title='Agendar' />
          </Footer>
        </ScrollView>
        <ModalView visible={openModal}>
          <Guilds handleGuildSelect={handleGuildSelect} />
        </ModalView>
      </KeyboardAvoidingView>
    </Background>
  )
}
