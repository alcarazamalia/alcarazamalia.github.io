<template>
    <div>
      <br>
      <div class="d-md-flex justify-content-around">
            <div class="container-a d-flex" >
                <button class="btn btn-primary margen" v-on:click="menu()">Menu Principal</button> &nbsp;
                <button class="btn btn-primary margen" v-on:click="usuarios()" >Lista de Usuarios</button> &nbsp;
                <button class="btn btn-primary margen" v-on:click="turnos()" >Lista de Turnos</button> &nbsp;
                <button type="button" class="btn btn-dark margen" v-on:click="salir()">Salir</button>
                <br>
                </div>
             </div>
      <Header />
        <div class="container">
            <form action="" class="form-horizontal">
                <div class="form-group left">
                   <label for="" class="control-label col-sm-2">Nombre</label>
                   <div class="col-sm-10">
                      <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.name">
                   </div>
                </div>
                <div class="form-group left">
                   <label for="" class="control-label col-sm-2">Apellido</label>
                   <div class="col-sm-10">
                      <input type="text" class="form-control" name="apellido" id="apellido" v-model="form.lastname">
                   </div>
                </div>
                <div class="form-group left row">
                  <div class="col">
                        <label for="" class="control-label col-sm-3">Correo</label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" name="correo" id="correo" v-model="form.email">
                        </div>
                    </div>
                    <div class="col">
                      <label for="" class="control-label col-sm-5">Documento</label>
                      <div class="col-sm-7">
                          <input type="text" class="form-control" name="dni" id="dni" v-model="form.dni">
                      </div>
                    </div> 
                </div>
                <div class="form-group left row">
                     <div class="col">
                          <label for="" class="control-label col-sm-2">Telefono</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="phone" id="phone" v-model="form.phone">
                          </div>
                    </div>
                </div>

                <div class="form-group">
                  <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                  <button type="button" class="btn btn-danger margen" v-on:click="eliminar()" >Eliminar</button>
                </div> 
            </form>
        </div>
      <!-- <Footer />   -->
    </div>

</template>
<script>
//import SiteHeader from '@/components/SiteHeader.vue';
//import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
name:"ItemsTurnos",
components:{
 // SiteHeader,
//Footer
},
data:function(){
return {
    form:{
    "id_user":"",
    "email": "",
    "password": "",
    "name": "",
    "lastname": "",
    "dni": "",
    "phone":" ",
    "token" : ""    
    }
}
},
methods:{
  editar(){
      axios.put("http://turnostaller.dnsalias.com:28090/b1/api/usuarios",this.form)
      .then( data =>{
          console.log(data);
      })
  },
  salir(){
    this.$router.push("/login-view");
  },
  eliminar(){
    var enviar = {
      "id_user" : this.form.id_user,
        "token" : this.form.token
    };
    axios.delete("http://turnostaller.dnsalias.com:28090/b1/api/usuarios", { headers : enviar})
    .then( datos => {
        console.log(datos);
       this.$router.push("/home-view");
    });

  }
},
mounted:function(){
  this.form.id_user = this.$route.params.id;
  axios.get("http://turnostaller.dnsalias.com:28090/b1/api/usuarios?id="+ this.form.id_user)
.then( datos => {
  
  this.form.name = datos.data[0].Nombre;
  this.form.lastname = datos.data[0].Apellido;
  this.form.dni = datos.data[0].DNI;
  this.form.email = datos.data[0].Email;
  this.form.phone = datos.data[0].Telefono;
  this.form.token = localStorage.getItem("token");
  console.log(this.form);

})
 
}  
}
</script>
<style scoped>
.left{
text-align: left;
};
.margen{
margin-left: 15px;
margin-right: 15px;;
}
</style>