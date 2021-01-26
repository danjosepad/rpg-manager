
import React, { useState } from 'react'
import Lottie from 'react-lottie'

// Project imports

import { H3 as Message } from 'styles/fonts'
import { colors } from 'styles/theme'
import Input from 'components/Input'
import Button from 'components/Button'
import Modal from 'components/Modal'
import Success from 'assets/jsons/success.json'
import Form from './components/Form'

// Styled components

import { Container, Wrapper } from './styles'

interface ChangePasswordProps {

}

const LottieOptions = {
  loop: false,
  autoplay: true,
  animationData: Success,
};

const ChangePassword: React.FC<ChangePasswordProps> = () => {
  const [isShowingModal, setIsShowingModal] = useState<boolean>(true)


  return (
    <Container>
      <Form onSubmit={() => {}} />
      <Modal isShowing={isShowingModal} onClose={() => setIsShowingModal(false)}>
        <Wrapper>
          <Lottie
            options={LottieOptions}
            height={300}
            width={300}
          />
          <Message color={colors.green}>Senha alterada com sucesso!</Message>
        </Wrapper>
      </Modal>
    </Container>
  )
}

export default ChangePassword