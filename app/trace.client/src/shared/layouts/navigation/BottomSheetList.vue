<script setup lang="ts">
import { ref } from 'vue';
import { IModule } from 'src/shared/libs/Menu';
import BottomSheet from './BottomSheet.vue';

const isOpen = ref(false);
interface IProps {
  items: Array<IModule>;
}

const emits = defineEmits(['update:visible']);
const props = defineProps<IProps>();
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
  <bottom-sheet v-bind="$attrs" v-model:visible="isOpen" :threshold="150">
    <q-separator class="q-my-sm"></q-separator>
    <q-list padding>
      <q-item
        v-for="(extendedItem, extendedIndex) in props.items"
        :key="extendedIndex"
        :to="{ name: extendedItem.name }"
        @click="closeModal(false)"
        class="border-radius-sm"
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
  </bottom-sheet>
</template>
