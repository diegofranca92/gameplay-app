import React from 'react'
import { TextInputProps } from 'react-native'

import { Wrapper } from './styles'

export function TextArea({ ...props }: TextInputProps) {
  return <Wrapper {...props} textAlignVertical='top' />
}
