import React, { ReactNode } from 'react'
import { View, Modal, ModalProps } from 'react-native'
import { Overlay, Container, BarIcon } from './styles'
import { Background } from '../../components/Background'

type Props = ModalProps & {
  children: ReactNode
}

export function ModalView({ children, ...props }: Props) {
  return (
    <Modal {...props} transparent animationType='slide'>
      <Overlay>
        <Container>
          <Background>
            <BarIcon />
            {children}
          </Background>
        </Container>
      </Overlay>
    </Modal>
  )
}
