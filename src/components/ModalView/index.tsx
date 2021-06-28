import React, { ReactNode } from 'react'
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'
import { Overlay, Container, BarIcon } from './styles'
import { Background } from '../../components/Background'

type Props = ModalProps & {
  children: ReactNode
  close: () => void
}

export function ModalView({ children, close, ...props }: Props) {
  return (
    <Modal {...props} transparent statusBarTranslucent animationType='slide'>
      <TouchableWithoutFeedback onPress={close}>
        <Overlay>
          <Container>
            <Background>
              <BarIcon />
              {children}
            </Background>
          </Container>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
