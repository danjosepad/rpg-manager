import React from 'react'
import { Formik } from 'formik'

// Project imports

import Button from 'components/Button'
import Input from 'components/Input'
import { FormProps } from './Form.props'
import { validationSchema } from './Form.schema'

// Styled components

import { Container } from './styles'

const Form = ({ onSubmit }: FormProps) => {
  const initialValues = {
    password: '',
    confirmPassword: ''
  }
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Container data-testid="form__container">
        <Input name="password" label="Senha" aria-label="password" type="password" />
        <Input name="confirmPassword" label="Confirmar senha" aria-label="confirm-password" type="password"/>
        <Button text="Alterar senha" />
      </Container>
    </Formik>
  )
}


export default Form