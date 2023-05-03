<template>
<div class="grid min-h-screen mr-0">
    <div class="col-12 md:col-6 p-0">
        <img class="w-full h-full" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980" alt="man diriving a car">
    </div>
    <div class="col-12 md:col-6 p-0 flex justify-content-center">
        <div class="flex flex-column align-items-center justify-content-center" style="max-width: 26rem;">
        <h1 class="text-center text-6xl my-7 font-bold">Join us!</h1>

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
                        <pv-input-text v-model="email" type="email" required id="email"></pv-input-text>
                        <label for="email">Email</label>
                    </span>
                </div>
            </div>

            <div class="m-3 text-center">
                <div class="px-3">
                    <span class="p-float-label">
                        <pv-input-text type="password" v-model="password" required id="password"></pv-input-text>
                        <label for="password">Password</label>
                    </span>
                </div>
            </div>

            <div class="m-3 text-center">
                <div class="px-3">
                    <span class="p-float-label">
                        <pv-dropdown required v-model="role" :options="roles" optionLabel="name" placeholder="Select a Role" ></pv-dropdown>
                    </span>
                </div>
            </div>


            <div class="button w-full text-center my-5">
                    <pv-button type="submit" class="w-full" label = "Sign Up"></pv-button>
            </div>
        </form>
    <div>
        <span>Already have an account? </span>
        <a href="/sign-in" class="font-semibold">Sign in!</a>
    </div>
        </div>
    </div>
</div>
</template>

<script>
import AuthenticationApiService from '../../security/services/auth.service.js'

export default {    
    name: 'sign-up',
    data:() => {
        return{
            name: null,
            email: null,
            password: null,
            role: null,
            errors:[],
            roles: [
			{name: 'Mechanic', value: 'mechanic'},
			{name: 'Customer', value: 'customer'},
        ]
        };
    },

    methods: {
        async signUpUser(newUser){
            await AuthenticationApiService.signUp(newUser)
                .then((response) => {
                    console.log(response.data.user)
            })
            .catch((error) => {
                this.errors.push(error);
            });
        },

        createUser(){
            return{
                //name: this.name,
                email: this.email,
                password: this.password,
                role: this.role.value,
            };
        },

        async submit(){
            const newUser = this.createUser();
            await this.signUpUser(JSON.stringify(newUser));
            this.$router.push("/sign-in");
            this.resetForm();
        },

        resetForm(){
            this.name = null;
            this.email = null;
            this.password = null;
            this.role = null;
        },  
    },
};
</script>

<style>

.grid{
    grid-gap:0 !important;
}
</style>