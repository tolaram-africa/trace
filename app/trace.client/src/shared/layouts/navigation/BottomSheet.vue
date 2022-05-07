<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Sheet } from 'bottom-sheet-vue3';
import 'bottom-sheet-vue3/css/style.css';

const isopen = ref(false);

interface IBottomSheetTheme {
  sliderIconColor: string;
  sheetColor: string;
  containerColor: string;
}

interface IBottomSheetDefault extends IBottomSheetTheme {
  radius: string;
  height: string;
}

const bottomSheetDefault = reactive<IBottomSheetDefault>({
  radius: '16px',
  height: '40%',
  sliderIconColor: 'var(--q-app-surface)',
  sheetColor: 'var(--q-app-sheet)',
  containerColor: 'var(--q-app-shade)',
});
</script>

<script lang="ts">
export default {
  name: 'BottomSheet',
};
</script>

<template>
  <sheet
    v-bind="$attrs"
    v-model:visible="isopen"
    :radius="bottomSheetDefault.radius"
    :height="bottomSheetDefault.height"
    :sliderIconColor="bottomSheetDefault.sliderIconColor"
    :sheetColor="bottomSheetDefault.sheetColor"
    :containerColor="bottomSheetDefault.containerColor"
  >
    <slot>
      <h6 class="text-center">Bottom Sheet</h6>
    </slot>
  </sheet>
</template>
