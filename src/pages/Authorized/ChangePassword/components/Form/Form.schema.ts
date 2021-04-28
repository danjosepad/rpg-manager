import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
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