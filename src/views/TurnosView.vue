<template>
  <!-- Lista de turnos -->
  <div> 
      <div class="d-md-flex justify-content-around">
            <div class="container-a d-flex" >
                <button class="btn btn-primary" v-on:click="menu()" > Menu Principal </button>
                <button class="btn btn-primary" v-on:click="usuarios()" > Lista de Usuarios </button>
                <button class="btn btn-primary" > Lista de Turnos </button>
                <br>
                </div>
             </div>
           <div class="container izquierda">
                <br>
              <h2> Lista de Turnos en construccion.... </h2>
              <br>
              <table class="table table-hover">
              <thead>
                  <tr>
                      <th scope="col">ID Turno</th>
                      <th scope="col">ID Usuario</th>
                      <th scope="col">Usuario</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Hora</th>
                      <th scope="col">Medico</th>
                      <th scope="col">Estado</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="turno in ListTurnos" :key="turno.id_turno" v-on:click="editar(turno.id_turno)">
                      <th scope="row">{{ turno.id_turno}}</th>
                      <th scope="row">{{ turno.id_usuario}}</th>
                      <th scope="row">{{ turno.fecha}}</th>
                      <th scope="row">{{ turno.hora}}</th>
                      <th scope="row">{{ turno.medico}}</th>
                      <th scope="row">{{ turno.estado}}</th>
                  </tr>
              </tbody>
              </table>
            </div> 
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name:"TurnosView",
  data(){
      return {
          ListTurnos:null,
          pagina:1
      }
  },
  methods:{
          editar(id){
              this.$router.push('/items-turnos/' + id);
          },
          menu(){
              this.$router.push('/home-view');
          },
          usuarios(){
              this.$router.push('/usuarios-view');
          },
  },
  mounted:function(){
      let datos = "http://turnostaller.dnsalias.com:28090/b2/api/v1/turnos/?fecha=20230801";
      axios.get(datos).then( data =>{
          this.ListTurnos = data.data;
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
    margin-bottom: 1%;
}
</style>