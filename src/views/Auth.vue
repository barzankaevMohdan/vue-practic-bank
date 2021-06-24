<template>
  <form class="card" @submit.prevent="onSubmit">
      <h1>Войти в систему</h1>

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

      <button class="btn primary" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
      <div class="text-danger" v-if="isTooManyAttempts">
        Лимит попыток входа в систему. Попробуйте позже
      </div>
  </form>
</template>

<script>
import {useLoginForm} from '@/use/login-form.js'
import {error} from '@/utils/error.js'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const route = useRoute()

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
      ...useLoginForm()
    }
  }
}
</script>

<style>

</style>