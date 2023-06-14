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
    </div>
    
</template>
<script>
//import axios from 'axios';
export default {
    name:"HomeView",
    
    methods:{
            usuarios(){
                this.$router.push('/usuarios-view');
            },
            turnos(){
                this.$router.push('/turnos-view');
            }
    },

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