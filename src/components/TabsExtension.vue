// The Tabs component is used for hiding content behind a selectable item. This
// can also be used as a pseudo-navigation for a page, where the tabs are links
// and the items are the content.

<template>
  <article class="content">
    <!-- Navigation Tabs  -->
   <nav class="tabs-container flex justify-center mb-2">
      <ul class="inline-flex">
        <!-- Loop over default o pased props to display tabs-->
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          @click="changeSelectedTab(index)"
        >
          <h3 :class="{ active: selectedTab === index }">{{ tab }}</h3>
        </li>
      </ul>
    </nav>

    <!-- Add transition between content -->
    <transition-group name="slide-fade" mode="out-in">
      <!-- Loop over default o pased props to display content-->
      <div
        class="flex flex-col justify-around items-center"
        v-for="(content, index) in incomingData"
        :key="index"
        v-show="selectedTab === index"
      >
        <slot name="tabContent" :content="content">
          <h3 v-show="content.title">{{ content.title }}</h3>
          <p class="w-2/3 mx-auto" v-show="content.text">
            {{ content.text }}
          </p>
          <img v-show="content.img" class="mt-2" :src="content.img" />
        </slot>
      </div>
    </transition-group>
      <slot name="circle"> </slot>
  </article>
</template>

<script>
export default {
  name: "TabsExtension",
  props: {
    tabs: {
      type: Array,
      default: () => {
        return ["Card", "Tab Img", "Tab Text"];
      },
    },
    incomingData: {
      type: Array,
      default: () => {
        return [
          {
            title: "Card",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: "https://picsum.photos/100/100?random=1",
          },
          {
            title: null,
            text: null,
            img: "https://picsum.photos/100/100?random=6",
          },
          {
            title: "",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: null,
          },
        ];
      },
    },
  },

  data() {
    return {
      selectedTab: null,
    };
  },
  methods: {
    changeSelectedTab(index) {
      this.selectedTab = index;
    },
    next() {
      this.selectedTab++;
    },
    prev() {
      this.selectedTab--;
    },
  },
  mounted() {
    this.changeSelectedTab(0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs-container li {
  min-width: 50px;
  cursor: pointer;
  margin: 0 1rem;
}
.active {
  border-bottom: 2.5px solid #413fb1;
}

.content {
  height: 400px;
  overflow: hidden;
}
</style>
