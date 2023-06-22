<template>
  <!-- Lista de turnos -->
  <div class="page-container">
    <header>
      <!-- Cabecera -->
      <h1>Centro Médico</h1>
    </header>
    <div class="content-container">
      <!-- Secciones -->
      <div class="section">
        <button class="btn btn-primary" v-on:click="menu()"> Menu Principal </button> &nbsp;
        <button class="btn btn-primary" v-on:click="usuarios()"> Lista de Usuarios </button>&nbsp;
        <button class="btn btn-primary"> Lista de Turnos </button>&nbsp;
        <button type="button" class="btn btn-dark margen" v-on:click="salir()">Salir</button>
      </div>
    </div>
    <div class="container izquierda">
      <h2> Lista de Turnos </h2>
      <input type="text" v-model="searchFecha" placeholder="Buscar por Fecha" />
      <button class="btn btn-primary" v-on:click="buscarTurnos()">Buscar Turnos</button>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID Turno</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Medico</th>
            <th scope="col">ID + Usuario</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="turno in filteredTurnos" :key="turno.id_turno">
            <td scope="row">{{ turno.id_turno }}</td>
            <td scope="row">{{ turno.fecha }}</td>
            <td scope="row">{{ turno.hora }}</td>
            <td scope="row">{{ turno.medico }}</td>
            <td scope="row">{{ turno.id_usuario + "- " + turno.usuario }}</td>
            <td scope="row">{{ turno.estado }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "TurnosView",
  data() {
    return {
      ListTurnos: [], // Inicialmente, asigna una matriz vacía
      pagina: 1,
      searchFecha: ''
    };
  },
  methods: {
    buscarTurnos() {
      this.fetchData(); // Llama a la función fetchData para obtener los turnos con la fecha ingresada
    },
    fetchData() {
      const accessToken = localStorage.getItem('accessToken');
      const fecha = this.searchFecha;
      const headers = {
        Authorization: `${accessToken}`,
      };
      axios
        .get(`http://turnostaller.dnsalias.com:28090/b2/api/v1/turnos/?fecha=${fecha}`, { headers })
        .then((response) => {
          this.ListTurnos = response.data;
          console.log(this.ListTurnos); // Verificar la respuesta de la API
          this.ListTurnos.forEach(turno => {
            turno.estado = turno.estado === 1 ? 'Activo' : 'Inactivo'; 
          });
        })
        .catch((error) => {
          console.error('Error en la solicitud GET:', error);
        });
    },
    menu() {
      this.$router.push('/home-view');
    },
    usuarios() {
      this.$router.push('/usuarios-view');
    },
    salir() {
      this.$router.push("/");
      localStorage.removeItem('accessToken');
    },
  },
  computed: {
    filteredTurnos() {
      if (!this.ListTurnos) {
        return null;
      }

      const searchTerm = this.searchFecha.toLowerCase();
      if (!searchTerm) {
        return this.ListTurnos.data;
        }
      return this.ListTurnos.filter(turno => {
        const turnoFecha = turno.fecha.toLowerCase();
        //const searchFecha = new Date(searchTerm);

        return turnoFecha.includes(searchTerm);
      });
    }
  },
};
</script>

<style  scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
}
header {
  text-align: center;
}
.content-container {
  display: flex;
  flex-direction: column;
}
.section {
  margin-bottom: 20px;
}
  .izquierda{
      text-align: left;
  }
</style>