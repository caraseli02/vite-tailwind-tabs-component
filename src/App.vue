<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
    <navBar />
    <div class="max-w-screen-xl mx-auto">
      <router-view v-slot="{ Component }">
        <transition name="slide-left">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
export default defineComponent({
  components: {
    NavBar,
  },
  watch: {},
});
</script>

<style>
@import "./assets/icons.css";

#app {
  background: green;
  background-image: url("../public/img/vuebg.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  min-height: 100vh;
}

.slide-left-enter-active {
  transition: all 0.5s ease-out, 1.3s;
}

.slide-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateY(20%);
  opacity: 0;
  position: absolute;
}
</style>
