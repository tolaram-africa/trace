<script setup lang="ts">
import { toRefs, computed, onBeforeMount } from 'vue';
import { useQuasar } from 'quasar';
import { IModule } from '@/libs/Menu';
import SwitcherTab from '@/layouts/navigation/SwitcherTab.vue';
import { Fragment } from '@yunzhe35p/vue-fragment';
import { layoutState } from '@/layouts/composables/Layout';

const $q = useQuasar();
const { moduleSubItems } = toRefs(layoutState);
interface IProps {
  items: Array<IModule>;
}

const props = withDefaults(defineProps<IProps>(), {
  items: () => [],
});

onBeforeMount(() => {
  moduleSubItems.value = props.items;
});
const showView = computed(() => {
  return moduleSubItems.value.length > 0 && $q.platform.is.desktop;
});
</script>

<script lang="ts">
export default {
  name: 'LayoutSubWrapper',
};
</script>

<template>
  <fragment>
    <!-- TODO: Implement mobile option -->
    <q-page-sticky expand position="top" :offset="[0, 0]">
      <div class="full-width">
        <q-separator v-show="showView" class="q-my-md"></q-separator>
        <switcher-tab
          v-show="showView"
          :items="moduleSubItems"
          align="left"
          route
        ></switcher-tab>
      </div>
    </q-page-sticky>
    <slot>
      <router-view></router-view>
    </slot>
  </fragment>
</template>
