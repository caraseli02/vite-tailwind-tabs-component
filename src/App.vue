<template>
  <div>
    <navBar />
    <div class="max-w-screen-xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view v-slot="{ Component }">
      <transition
        name="slide-right"
      >
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
html {
  background-image: url("../public/img/vuebg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
.slide-right-enter-active {
  transition: all 0.5s ease-out;
}

.slide-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
