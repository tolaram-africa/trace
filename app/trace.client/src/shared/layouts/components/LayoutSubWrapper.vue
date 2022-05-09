<script setup lang="ts">
import { IModule } from '@/libs/Menu';
import SwitcherTab from '@/layouts/navigation/SwitcherTab.vue';
import { Fragment } from '@yunzhe35p/vue-fragment';

export interface IProps {
  items: Array<IModule>;
}

const props = withDefaults(defineProps<IProps>(), {
  items: () => [],
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
    <q-separator class="q-my-md"></q-separator>
    <switcher-tab :items="props.items" align="left" route></switcher-tab>
    <slot>
      <router-view></router-view>
    </slot>
  </fragment>
</template>
