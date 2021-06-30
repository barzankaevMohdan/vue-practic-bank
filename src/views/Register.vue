<template>
  <form class="card" @submit.prevent="onSubmit">
      <h1>Регистрация</h1>

      <div :class="['form-control', {invalid: eError}]">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" @blur="eBlur">
          <small v-if="eError">{{ eError }}</small>
      </div>

      <div :class="['form-control', {invalid: pError}]">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" @blur="pBlur">
        <small v-if="pError">{{ pError }}</small>
      </div>

      <button class="btn primary" :disabled="isSubmitting || isTooManyAttempts">Зарегистрироваться</button>
      <a href="#" @click.prevent="auth">Войти</a>
      <div class="text-danger" v-if="isTooManyAttempts">
        Лимит регийстраций. Попробуйте позже
      </div>
  </form>
</template>

<script>
import {useRegisterForm} from '@/use/register-form.js'
import {error} from '@/utils/error.js'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    if(route.query.message === 'auth') {
      store.dispatch('setMessage', {
        message: {
          value: error(route.query.message),
          title: 'Ошибка',
          type: 'warning'
        },
        time: 10000
      })
    }
    return {
      ...useRegisterForm(),
      auth: () => {
        router.push('/auth')
      }
    }
  }
}
</script>

<style>

</style>