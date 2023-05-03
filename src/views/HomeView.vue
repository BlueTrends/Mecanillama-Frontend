<template>
  <RouterView />
  <div class="home">
    <h1 class="mr-2" style="
    font-family: fantasy;
    font-size: xxx-large;
    ">Mecanillama</h1>
    <h2>The app for connecting driver and mechanic</h2>
        <div class="mb-3">
      <img
        style="
           {
            height: 228px;
            width: 400px;
          }
        "
        src="src/images/hero-img.jfif"
        alt="man over a car"
      />
    </div>
    <div class="buttons" >
      <div class="button">
        <RouterLink to="/sign-up">
          <pv-button label="Sign up" class="p-button-rounded p-button-lg" style="padding: 0.8925rem 8.25rem;"/>
        </RouterLink>
      </div>
      <div class="button">
        <RouterLink to="/sign-in">
          <pv-button label="Sign in" class="p-button-rounded p-button-lg" style="padding: 0.8925rem 8.25rem;"/>
        </RouterLink>
      </div>
    </div>
  </div>
</template>


<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "HomeView",
  components: {},
};
</script>

