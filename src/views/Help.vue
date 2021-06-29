<template>
  <app-page :back="back = true" title="Ответы а вопросы">
    <question-item
      v-for='q in questions'
      :key="q.title"
      :question="q"
    ></question-item>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage'
import QuestionItem from '../components/questions/QuestionItem'

export default {
  setup() {
    const questions = [
      {title: 'Что есть в данной ситстеме?', text: 'Тут есть все, для того, чтобы смотерть какие транзакции человек совершал'},
      {title: 'Как тут рабоатет авторизаця?', text: 'Все реализовано через Firebase'}
    ]

    return {
      questions
    }
  },
  components: { AppPage, QuestionItem }
}
</script>
