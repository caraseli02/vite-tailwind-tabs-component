// The Tabs component is used for hiding content behind a selectable item. This
// can also be used as a pseudo-navigation for a page, where the tabs are links
// and the items are the content.

<template>
  <!-- Navigation Tabs  -->
  <div>
    <nav>
      <!-- Loop over default o pased props -->
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeSelectedTab(index)"
        class="tabs"
        :class="{ active: selectedTab === index }"
      >
        <i v-if="showIcons" :class="tab.icon"></i>
        {{ tab.name ? tab.name : tab }}
      </span>
    </nav>
    <slot
      ><div
        class="
          border border-gray-800
          shadow
          rounded-md
          p-4
          max-w-sm
          w-full
          mx-auto
        "
      >
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-gray-700 h-12 w-12"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-gray-700 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-gray-700 rounded"></div>
              <div class="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div></div
    ></slot>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [
        { name: "Card", icon: "gg-credit-card" },
        { name: "Img", icon: "gg-inpicture" },
        { name: "Text", icon: "gg-file-document" },
      ],
    },
    showIcons: {
      type: Boolean,
      default: false,
    },
  },
  name: "TabsAdaptability",
  data() {
    return {
      selectedTab: null,
    };
  },
  methods: {
    changeSelectedTab(index) {
      this.selectedTab = index;
    },
  },
  mounted() {
    this.changeSelectedTab(0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  margin: 0 auto 10px;
  width: 100px;
  height: 50px;
}
.tabs > i {
  margin-right: 10px;
}
.active {
  border-bottom: 2.5px solid;
}
</style>
