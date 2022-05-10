<script setup lang="ts">
import { IModule } from '@/libs/Menu';

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
    <template v-for="(item, itemIndex) in props.items" :key="itemIndex">
      <q-item
        :to="{ name: item.name }"
        @click="closeModal(false)"
        class="border-radius-sm text-accent"
        active-class="text-action"
        clickable
      >
        <q-item-section avatar>
          <q-icon size="2em" :name="item.icon" />
        </q-item-section>
        <q-item-section class="text-h6" no-wrap
          >{{ item.title }}
        </q-item-section>
      </q-item>
      <q-separator
        color="app-background"
        class="q-mx-sm"
        v-if="itemIndex < props.items.length - 1"
      />
    </template>
  </q-list>
</template>
