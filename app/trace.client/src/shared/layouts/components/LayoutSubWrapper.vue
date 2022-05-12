<script setup lang="ts">
import { toRefs, computed, onBeforeMount } from 'vue';
import { useQuasar } from 'quasar';
import { IModule } from '@/libs/Menu';
import { layoutState } from '@/layouts/composables/Layout';
import SwitcherTab from '@/layouts/navigation/SwitcherTab.vue';

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
  <q-page v-bind="$attrs" class="row items-center justify-center">
    <div class="full-width">
      <q-separator
        v-show="showView"
        class="q-my-sm"
        color="app-background-more"
      ></q-separator>
      <switcher-tab
        v-show="showView"
        :items="moduleSubItems"
        align="left"
        route
      ></switcher-tab>
    </div>
    <slot>
      <router-view></router-view>
    </slot>
  </q-page>
</template>
