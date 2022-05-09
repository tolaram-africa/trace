<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar';
import BottomSheetList from './BottomSheetList.vue';
import { IModule } from '@/libs/Menu';

interface IProps {
  position: 'left' | 'right' | 'top' | 'bottom' | 'standard';
  seamless: boolean;
  persistent: boolean;
  mobile?: boolean;
  marginClass?: string;
  moduleItems: Array<IModule>;
}

const props = defineProps<IProps>();

defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent();

const moduleAction = () => {
  setTimeout(() => {
    onDialogOK();
  }, 200);
};
</script>

<script lang="ts">
export default {
  name: 'DialogSheetList',
};
</script>

<template>
  <q-dialog
    ref="dialogRef"
    :seamless="props.seamless"
    :persistent="props.persistent"
    :position="props.position"
    @hide="onDialogHide"
  >
    <q-card
      class="q-dialog-card border-radius-sm shadow-1 q-pa-sm q-pt-lg"
      :class="
        props.mobile
          ? 'q-dialog-plugin-mobile ' + props.marginClass
          : 'q-dialog-plugin-desktop ' + props.marginClass
      "
    >
      <q-scroll-area class="fit">
        <slot>
          <bottom-sheet-list
            @update:visible="moduleAction"
            :items="moduleItems"
          />
        </slot>
      </q-scroll-area>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.q-dialog-card {
  background-color: var(--q-app-background-shift);
}

.q-dialog-plugin-desktop {
  margin-right: 18px;
  margin-top: -380px;
  height: 320px;
  width: 320px;
}

.q-dialog-plugin-mobile {
  height: 320px;
  min-height: 320px;
  min-width: 90vw;
}

.q-dialog-margin {
  margin: 0 24px 64px 24px;
}
</style>
