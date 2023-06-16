<template>
    <!-- Menu principal -->
    <div> 
        <div class="d-md-flex justify-content-around">
            <div class="container" >
                <button class="btn btn-primary margen" >Menu Principal</button>
                <button class="btn btn-primary margen" v-on:click="usuarios()">Lista de Usuarios</button>
                <button class="btn btn-primary margen" v-on:click="turnos()">Lista de Turnos</button>
                <button type="button" class="btn btn-dark margen" v-on:click="salir()">Salir</button>
                <br>
            </div> 
    </div>
    <SEction> 
        <button class="btn btn-primary margen" v-on:click="getWeatherData()">Ver Clima</button>

    </SEction>
    </div>
    
</template>
<script>
import axios from 'axios';
export default {
    name:"HomeView",
     
    methods:{
            usuarios(){
                this.$router.push('/usuarios-view');
            },
            turnos(){
                this.$router.push('/turnos-view');
            }
            ,
    
           getWeatherData() {
            const apiKey = '75d464219cab61ebab7a8d7575dd4616';
            const city = 'ROSARIO';
           const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
           // 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';

              axios.get(apiUrl)
             .then(response => {
           // Procesa los datos de respuesta aquí
            console.log(response.data);
           })
          .catch(error => {
         // Maneja los errores aquí
          console.error(error);
            });
  }
}
    
}
</script>
<style  scoped>
.margen{
margin-left: 15px;
margin-right: 15px;;
}
.d-md-flex {
    display: flex;
    margin-top: 10px;
    margin-bottom: 1%;
}

</style>