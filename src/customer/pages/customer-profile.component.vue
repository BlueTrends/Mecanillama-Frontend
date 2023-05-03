<template>
    <customer-header-component></customer-header-component>
    <p>{{getUserName()}}</p>
    <div class="flex justify-content-center">
        <div class="flex flex-column align-items-center justify-content-center" style="max-width: 26rem;">
          <h1 class="text-center text-6xl my-7 font-bold">Tus Datos</h1>
          <form @submit.prevent="submit">
              <div class="m-3 text-center">
                  <div class="px-3">
                      <span class="p-float-label">
                          <pv-input-text v-model="customerName" type="name" 
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
                          <pv-input-text type="brand" v-model="brand" required id="brand"></pv-input-text>
                          <label for="brand">Car Brand</label>
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
import customerHeaderComponent from "../../components/customer-header.component.vue";
import AuthService from '../../security/services/auth.service.js'
import {CustomersApiService} from "../services/customers.service.js";


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
    customerHeaderComponent,
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
                brand: this.brand,
                userId: localStorage.getItem("userId")
            };
        },

        async submit(){
            const newUser = this.createUser();
            await this.updateUser(JSON.stringify(newUser));
            this.$router.push("/customer-profile");
            this.resetForm();
        },

        async updateUser(newUser){
            await CustomersApiService.updateUser( localStorage.getItem("user"),newUser)
                .then((response) => {
                    console.log(response.data.user)
            })
            .catch((error) => {
                this.errors.push(error);
          });
        },
  },
  created() {
    this.customerUserService = new CustomersApiService();
    this.customerId = localStorage.getItem("user");    
    this.customerUserService.getByUserId(this.customerId).then((response) => {
      
      this.customer = response.data;
      console.log(this.customer);
      this.customerName = response.data.name;
      this.address = response.data.address;
      this.brand = response.data.carMake;

      localStorage.setItem("customerId", response.data.id)
    });
  },
}

</script>

<style>

</style>