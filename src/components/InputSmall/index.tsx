import React from 'react'
import { TextInputProps } from 'react-native'

import { Wrapper } from './styles'

export function InputSmall({ ...props }: TextInputProps) {
  return <Wrapper {...props} keyboardType='number-pad' />
}
