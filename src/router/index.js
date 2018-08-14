import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import CardForm from '@/components/CardForm'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/',
      name: 'CardForm',
      component: CardForm
    }
  ]
})
