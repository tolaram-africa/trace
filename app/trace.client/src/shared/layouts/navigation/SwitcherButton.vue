<script setup lang="ts">
import { IModule } from 'src/shared/libs/Menu';

interface IProps {
  items: Array<IModule>;
  modelValue: string;
}
const props = defineProps<IProps>();
const emits = defineEmits(['update:modelValue']);
const updateValue = (value: boolean) => {
  emits('update:modelValue', value);
};
</script>
<script lang="ts">
export default {
  name: 'SwitcherButton',
};
</script>

<template>
  <q-tabs
    dense
    no-caps
    inline-label
    v-model="modelValue"
    align="center"
    indicator-color="transparent"
    class="bg-app-background q-mx-md border-radius-sm text-accent"
    active-class="shadow-2 bg-app-plainer text-action"
    content-class="text-body1 text-weight-medium"
    @update:model-value="updateValue"
  >
    <q-tab
      v-for="(moduleItem, moduleIndex) in props.items"
      :key="moduleIndex"
      :name="moduleItem.name"
      class="border-radius-sm q-ma-xs q-px-none"
    >
      {{ moduleItem.title }}
    </q-tab>
  </q-tabs>
</template>
