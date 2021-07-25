<script>
import { defineComponent } from "vue";
import Tabs from "../components/Tabs.vue";
import Polygon from "../components/Polygon.vue";
import TabsConfig from "../components/TabsConfig.vue";
import TabsAdaptability from "../components/TabsAdaptability.vue";
import TabsInversion from "../components/TabsInversion.vue";
import TabsExtension from "../components/TabsExtension.vue";
export default defineComponent({
  data() {
    return {
      today: new Date().toLocaleString(),
    };
  },
  components: {
    Tabs,
    TabsConfig,
    TabsAdaptability,
    TabsInversion,
    TabsExtension,
    Polygon,
  },
  watch: {},
});
</script>

<template>
  <section class="sm:text-center lg:text-left glass w-80 md:w-2/3 mx-auto">
    <h2
      class="
        text-3xl
        tracking-tight
        leading-10
        font-extrabold
        text-gray-900
        sm:text-4xl
        sm:leading-none
        mb-2
      "
    >
      Reusability of Tabs Component
    </h2>
    <a
      target="_blank"
      class="text-gray-700 hover:text-gray-900"
      href="https://michaelnthiessen.com/6-levels-of-reusability/"
      >Titles inspired from<span class="text-indigo-600">
        The 6 Levels of Reusability:</span
      >
    </a>
    <p
      class="
        mt-3
        text-base text-gray-700
        sm:mt-5
        sm:text-lg
        sm:max-w-xl
        sm:mx-auto
        md:mt-5
        md:text-xl
        lg:mx-0
      "
    >
      The Tabs component is used for hiding content behind a selectable item.
      This can also be used as a pseudo-navigation for a page, where the tabs
      are links and the tab-items are the content.
    </p>
  </section>
  <article class="flex flex-wrap justify-around mt-10">
    <Polygon title="TEMPLATING" subTitle="Wrap the template in a component">
      <Tabs class="flex-1" />
    </Polygon>
    <Polygon
      title="CONFIGURATION"
      subTitle="Adding new props for icons display"
    >
      <TabsConfig :showIcons="true" class="flex-1" />
    </Polygon>
    <Polygon
      title="ADAPTABILITY"
      subTitle="Adding new default slot for loading status"
    >
      <TabsAdaptability :showIcons="true" class="flex-1" />
    </Polygon>
    <Polygon
      title="INVERSION"
      subTitle="Add scoped slots flexibility to components"
    >
      <TabsInversion class="flex-1" />
    </Polygon>
    <Polygon
      title="EXTENSION"
      subTitle="Named slots will add one or more extension"
    >
      <TabsExtension class="flex-1">
        <template v-slot:circle>
          <div
            class="
              absolute
              w-24
              h-16
              bottom-20
              left-0
              circle
              rounded-full
              animate-blob
              z-0
              filter
              blur-lg
              addClipPath
            "
          />
        </template>
      </TabsExtension>
    </Polygon>
  </article>
</template>

<style scoped>
.circle {
  background: #3fd4a0;
}

.addClipPath {
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
