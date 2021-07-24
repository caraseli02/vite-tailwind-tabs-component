<script>
import { defineComponent } from "vue";
import Tabs from "../components/Tabs.vue";

export default defineComponent({
  name: "NavBar",
  data: () => ({
    links: ["Home", "Nesting"],
  }),
  components: {
    Tabs,
  },
});
</script>

<template>
  <div
    class="
      h-16
      flex
      items-center
      justify-between
      text-gray-100
      py-2
      rounded-b-xl
      mx-auto
    "
  >
    <router-link to="/"><h1 class="text-lg">Tabs Component</h1></router-link>
    <Tabs :tabs="links">
      <!--Using Scoped Slots to transform tab in <router-link/> and make it UpperCase.
         -->
      <template v-slot:default="slotProps">
        <router-link
          :class="[
            $route.name === slotProps.tab
              ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
              : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'
          ]"
          :to="{ name: slotProps.tab }"
          class="p-2 rounded-lg"
        >
          {{ slotProps.tab }}
        </router-link>
      </template>
    </Tabs>
  </div>
</template>

<style scoped></style>
