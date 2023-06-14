<template>
  <!-- Lista de usuarios -->
  <div>
    <div class="d-md-flex justify-content-around">
            <div class="container-a d-flex" >
                <button class="btn btn-primary" v-on:click="menu()" > Menu Principal </button> &nbsp;
                <button class="btn btn-primary" > Lista de Usuarios </button> &nbsp;
                <button class="btn btn-primary" v-on:click="turnos()" > Lista de Turnos </button> &nbsp;
                <button type="button" class="btn btn-dark margen" v-on:click="salir()">Salir</button>
                <br>
                </div>
             </div>
          <div class="container izquierda">
              <br> <br>
              <h2> Lista de Usuarios</h2>
              <br>
              <table class="table table-hover">
              <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">DNI</th>
                      <th scope="col">TELEFONO</th>
                      <th scope="col">CORREO</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="usuario in ListUsers" :key="usuario.id_user" v-on:click="editar(usuario.id_user)">
                      <th scope="row">{{ usuario.id_user}}</th>
                      <th scope="row"> {{ usuario.name +" "+ usuario.lastname }}</th>
                      <th scope="row">{{ usuario.dni}}</th>
                      <th scope="row"> {{ usuario.phone }}</th>
                      <th scope="row"> {{ usuario.email }}</th>
                      
                  </tr>
          
              </tbody>
              </table>

          </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name:"UsuariosView",
  data(){
      return {
          ListUsers:null,
          pagina:1
      }
  },
  methods:{
          editar(id){
              this.$router.push('/items-user/' + id);
          },
          menu(){
              this.$router.push('/home-view');
          },
          turnos(){
              this.$router.push('/turnos-view');
          },
  },
  mounted:function(){
      let datos = "http://turnostaller.dnsalias.com:28090/b1/api/usuarios";
      axios.get(datos).then( data =>{
          this.ListUsers = data.data;
      });
  }

}
</script>
<style  scoped>
  .izquierda{
      text-align: left;
  }
  .d-md-flex {
    display: flex;
    margin-top: 10px;
}
</style>