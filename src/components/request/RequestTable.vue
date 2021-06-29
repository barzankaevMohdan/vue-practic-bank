<template>
<h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Телефон</th>
        <th>Сумма</th>
        <th>Статус</th>
        <th>Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(request, idx) in requests" :key="request.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ request.fio }}</td>
        <td>{{ request.phone }}</td>
        <td>{{ currency(request.amount) }}</td>
        <td><app-status :type="request.status" /></td>
        <td>
          <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: request.id}}">
            <button class="btn" @click="navigate">Открыть</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {currency} from '../../utils/currency-formater'
import AppStatus from '../ui/AppStatus'
export default {
  props: ['requests'],
  setup() {
    return {currency}
  },
  components: { AppStatus }

}
</script>

<style>

</style>