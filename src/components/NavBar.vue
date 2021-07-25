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
    <router-link to="/"><h1 class="text-gray-900 font-bold text-xl">Tabs Component</h1></router-link>
    <Tabs :tabs="links">
      <!--Using Scoped Slots to transform tab in <router-link/> and make it UpperCase.
         -->
      <template v-slot:default="slotProps">
        <router-link
          :class="[
            $route.name === slotProps.tab
              ? 'text-black bg-purple-200 focus:outline-none focus:text-purple-100 focus:bg-gray-700'
              : 'text-gray-900 hover:text-black hover:bg-purple-300 focus:outline-none focus:text-black focus:bg-purple-400 '
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
