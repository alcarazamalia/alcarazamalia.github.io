import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue';//Inicio de sesion
import HomeView from '../views/HomeView.vue'//Menu principal
import UsuariosView from '../views/UsuariosView.vue';//Lista de usuarios
import TurnosView from '../views/TurnosView.vue';//Lista de turnos
import ItemsTurnos from '../views/ItemsTurnos.vue';//turno por id para confirmar
import ItemsUser from '../views/ItemsUser.vue'; // user por id
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/home-view',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/usuarios-view',
    name: 'UsuariosView',
    component: UsuariosView
  },
  {
    path: '/turnos-view',
    name: 'TurnosView',
    component: TurnosView
  },
  {
    path: '/items-turnos/:id_turno',
    name: 'ItemsTurnos',
    component: ItemsTurnos
  },
  {
    path: '/items-user/:id_user',
    name: 'ItemsUser',
    component: ItemsUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
