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
      <Container>
        <Input name="password" label="Senha" />
        <Input name="confirmPassword" label="Confirmar senha" />
        <Button text="Alterar senha" />
      </Container>
    </Formik>
  )
}


export default Form