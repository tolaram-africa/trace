<script setup lang="ts">
import { IModule } from 'src/shared/libs/Menu';

interface IProps {
  items: Array<IModule>;
}
const props = defineProps<IProps>();
const emits = defineEmits(['update:visible']);
const closeModal = (value: boolean) => {
  emits('update:visible', value);
};
</script>
<script lang="ts">
export default {
  name: 'BottomSheetList',
};
</script>

<template>
  <q-list padding>
    <q-item
      v-for="(extendedItem, extendedIndex) in props.items"
      :key="extendedIndex"
      :to="{ name: extendedItem.name }"
      @click="closeModal(false)"
      class="border-radius-sm text-accent"
      active-class="text-action"
      clickable
    >
      <q-item-section avatar>
        <q-icon size="2em" :name="extendedItem.icon" />
      </q-item-section>
      <q-item-section class="text-h6" no-wrap
        >{{ extendedItem.title }}
      </q-item-section>
    </q-item>
  </q-list>
</template>
