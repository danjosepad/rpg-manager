import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Project imports

import Button from 'components/Button'
import Input from 'components/Input'

// Styled components

import { Container } from './styles'

// Utils

interface FormProps {
  onSubmit: () => any
}

const initialValues = {
  password: '',
  confirmPassword: ''
}

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(6),
  confirmPassword: Yup.string().required().min(6)
    .when("password", {
      is: (val: string) => !!(val && val.length > 0),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "As senhas precisam ser iguais"
      )
    })
})

const Form = ({ onSubmit }: FormProps) => {

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