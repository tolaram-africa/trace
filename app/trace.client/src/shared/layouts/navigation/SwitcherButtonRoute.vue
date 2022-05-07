<script setup lang="ts">
import { IModule } from 'src/shared/libs/Menu';

interface IProps {
  items: Array<IModule>;
}
const props = defineProps<IProps>();
</script>
<script lang="ts">
export default {
  name: 'SwitcherButtonRoute',
};
</script>

<template>
  <q-tabs
    dense
    no-caps
    inline-label
    align="center"
    indicator-color="transparent"
    class="bg-app-background q-mx-xs border-radius-sm text-accent"
    active-class="shadow-2 bg-app-plainer text-action"
    content-class="text-body1 text-weight-medium"
    v-bind="$attrs"
  >
    <q-route-tab
      v-for="(moduleItem, moduleIndex) in props.items"
      :key="moduleIndex"
      :name="moduleItem.name"
      :to="{ name: moduleItem.name }"
      class="border-radius-sm q-ma-xs q-px-none"
    >
      {{ moduleItem.title }}
    </q-route-tab>
  </q-tabs>
</template>
