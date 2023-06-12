<template>
    <!-- Menu principal -->
    <div class="d-md-flex justify-content-around">
            <div class="container-a d-flex" >
                <button class="btn btn-primary" > Menu Principal </button>
                <button class="btn btn-primary" v-on:click="usuarios()" > Lista de Usuarios </button>
                <button class="btn btn-primary" v-on:click="turnos()" > Lista de Turnos </button>
                <br>
                
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
.d-md-flex {
    display: flex;
    margin-top: 10px;
}

</style>