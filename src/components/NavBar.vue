<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  data: () => ({
    showMenu: false,
    showProfileMenu: false,
    links: [
      { text: "Home", to: "/" },
      { text: "About", to: "/about" },
    ],
  }),
});
</script>

<template>
  <nav class="">
    <div class="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
      <div class="flex items-center justify-between h-16">
        <div class="flex w-screen items-center justify-between">
          <router-link to="/"
            ><h1 class="text-xl font-bold justify-self-start">
              Tabs Component
            </h1></router-link
          >
          <div class="hidden md:block w-72 justify-self-center">
            <div class="ml-10 flex items-baseline">
              <router-link
                v-for="(link, i) in links"
                :key="i"
                :to="link.to"
                custom
                v-slot="{ navigate, href, isExactActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  :class="[
                    isExactActive
                      ? 'text-black bg-gray-50 focus:outline-none focus:text-gray-200 focus:bg-gray-700'
                      : 'text-gray-900 hover:text-black hover:bg-gray-200 focus:outline-none focus:text-black focus:bg-gray-200',
                    i > 0 && 'ml-4',
                  ]"
                  >{{ link.text }}</a
                >
              </router-link>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-200
              hover:text-black
              hover:bg-gray-400
              focus:outline-none
              focus:bg-gray-400
              focus:text-black
            "
            @click="showMenu = !showMenu"
          >
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6 text-black"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div class="md:hidden" :class="showMenu ? 'block' : 'hidden'">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <router-link
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          custom
          v-slot="{ navigate, href, isExactActive }"
        >
          <a
            :href="href"
            @click="navigate().then(() => (showMenu = false))"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="[
              isExactActive
                ? 'text-black bg-gray-50 focus:outline-none focus:text-gray-200 focus:bg-gray-700'
                : 'text-gray-900 hover:text-black hover:bg-gray-200 focus:outline-none focus:text-black focus:bg-gray-200',
              i > 0 && 'mt-1',
            ]"
            >{{ link.text }}</a
          >
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
