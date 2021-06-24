<template>
  <div :class="['alert', message.type]" v-if="message">
    <p class="alert-title">{{ message.title }}</p>
    <p>{{ message.value}}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  setup() {
    const store = useStore()
    const message = computed(() => store.state.message)

    return {
      message,
      close: () => store.commit('clearMessage')
    }
  }
}
</script>

<style>

</style>