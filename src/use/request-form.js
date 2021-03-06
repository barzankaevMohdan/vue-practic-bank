import * as yup from 'yup'
import {useField, useForm} from 'vee-validate'

export function useRequestForm (fn) {
  const {isSubmitting, handleSubmit} = useForm({
    initialValues: {
      status: 'active'
    }
  })

  const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField(
    'fio',
    yup.string()
      .trim()
      .required('Введите ФИО клиента')
  )
  const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
    'phone',
    yup.string()
      .trim()
      .required('Телефон не может быть пустым')
      .min(10, 'Введите корректный номер телефона')
      .max(15, 'Введите корректный номер телефона')
  )
  const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
    'amount',
    yup.string()
      .trim()
      .required('Введите сумму')
  )
  const {value: status} = useField('status')

  const onSubmit = handleSubmit(fn)

  return {
      isSubmitting,
      fio,
      phone,
      amount,
      status,
      fError,
      pError,
      aError,
      fBlur,
      pBlur,
      aBlur,
      onSubmit
  }
}