import {computed, watch} from 'vue'
import * as yup from 'yup'
import {useField, useForm} from 'vee-validate'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLoginForm() {
    const router = useRouter()
    const store = useStore()
    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
      'email',
      yup
        .string()
        .trim()
        .required('Введите email')
        .email('Необходимо ввести корректный email')
    )

    const PASSWORD_LENGTH = 6

    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
      'password',
      yup
        .string()
        .trim()
        .required('Введите пароль')
        .min(PASSWORD_LENGTH, `Пароль не может быть меньше ${PASSWORD_LENGTH} символов`)
    )

    const isTooManyAttempts = computed(() => submitCount.value >= 3)

    watch(isTooManyAttempts, val => {
      if(val) {
        setTimeout(() => submitCount.value = 0, 3000)
      }
    })

    const onSubmit = handleSubmit( async values => {
      try {
        await store.dispatch('auth/login', values)
        router.push('/')
      } catch (e) {
        return
      }
    })

    return {
      email,
      password,
      eError,
      pError,
      eBlur,
      pBlur,
      onSubmit,
      isSubmitting,
      isTooManyAttempts
    }
}