
import React from 'react'
import Lottie from 'react-lottie'

// Project imports

import { H3 as Message } from 'styles/fonts'
import { colors } from 'styles/theme'
import Input from 'components/Input'
import Button from 'components/Button'
import Modal from 'components/Modal'
import Success from 'assets/jsons/success.json'

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
  return (
    <Container>
      <Input label="Sua senha" type="password" />
      <Input label="Confirme sua senha" type="password" />
      <Button text="alterar" type="submit" />

      <Modal isShowing={true}>
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