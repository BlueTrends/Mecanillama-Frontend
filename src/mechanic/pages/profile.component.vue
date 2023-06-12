<template>
  <mechanic-header-component></mechanic-header-component>
    <p>{{getUserName()}}</p>
    <div class="flex justify-content-center">
        <div class="flex flex-column align-items-center justify-content-center" style="max-width: 26rem;">
          <h1 class="text-center text-6xl my-7 font-bold">Tus Datos</h1>
          <form @submit.prevent="submit">
              <div class="m-3 text-center">
                  <div class="px-3">
                      <span class="p-float-label">
                          <pv-input-text v-model="name" type="name" 
                          id="name" name="name" required></pv-input-text>
                          <label for="name">Name</label>
                      </span>
                  </div>
              </div>

              <div class="m-3 text-center">
                  <div class="px-3">
                      <span class="p-float-label">
                          <pv-input-text v-model="address" type="address" required id="address"></pv-input-text>
                          <label for="address">Address</label>
                      </span>
                  </div>
              </div>

              
              <div class="m-3 text-center">
                  <div class="px-3">
                      <span class="p-float-label">
                          <pv-input-text type="phone" v-model="phone" required id="phone"></pv-input-text>
                          <label for="phone">Phone</label>
                      </span>
                  </div>
              </div>

              <div class="m-3 text-center">
                  <div class="px-3">
                      <span class="p-float-label">
                          <pv-textarea type="description" v-model="description" required id="description"></pv-textarea>
                          <label for="description">Description</label>
                      </span>
                  </div>
              </div>


              <div class="button w-full text-center my-5">
                      <pv-button type="submit" class="w-full" label = "Update"></pv-button>
              </div>
          </form>
      </div>
    </div>
</template>
<script>
import MechanicHeaderComponent from "../../components/mechanic-header.component.vue";
import AuthService from '../../security/services/auth.service.js'
import { MechanicsProfileApiService } from "../../mechanic/services/mechanics-api.service";


export default {
  name: "customer-profile",
  data(){
    return {
       customerName: 'name',
       address: 'address',
       brand: 'brand'

    };
  },
  components: {
    MechanicHeaderComponent,
  },
  methods: {
      getUserName(){
        const user=JSON.parse(AuthService.getCurrentUser());
        return user.email;
      },
      createUser(){
            return{
                name: this.name,
                address: this.address,
                phone: this.phone,
                description: this.description,
                mechanicId: localStorage.getItem("user")
            };
        },

        async submit(){
            const newMechanic = this.createUser();
            this.mechanincUserService = new MechanicsProfileApiService();

            this.mechanincUserService.update(localStorage.getItem("mechanicId"),JSON.stringify(newMechanic))
                .then((response) => {
                    console.log(response.data.user)
            })
            .catch((error) => {
                this.errors.push(error);
          });
            this.$router.push("/mechanic-profile");
            this.resetForm();
        },
  },
  created() {
    this.mechanincUserService = new MechanicsProfileApiService();
    this.customerId = localStorage.getItem("user");    
    this.mechanincUserService.getByUserId(this.customerId).then((response) => {
      
      this.customer = response.data;
      this.name = response.data.name;
      this.address = response.data.address;
      this.description = response.data.description;
      this.phone = response.data.phone;

      localStorage.setItem("mechanicId", response.data.id)
    });
  },
}

</script>

<style>

</style>