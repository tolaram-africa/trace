<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar';
import { IModule } from 'src/shared/layouts/composables/Layout';
import ModuleDialogItems from 'src/shared/layouts/navigation/ModuleDialogItems.vue';

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
  name: 'ModuleDialogDesktop',
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
      class="q-dialog-plugin border-radius-sm shadow-1"
      :class="
        props.mobile
          ? 'q-dialog-plugin-mobile ' + props.marginClass
          : 'q-dialog-plugin-desktop ' + props.marginClass
      "
    >
      <div
        class="q-pa-sm q-mt-sm row justify-center hide-scrollbar"
        v-if="props.mobile"
      >
        <module-dialog-items
          :module-items="moduleItems"
          @module-action="moduleAction"
        />
      </div>
      <q-scroll-area v-else class="fit">
        <div class="q-pa-sm q-mt-sm row justify-center">
          <module-dialog-items
            :module-items="moduleItems"
            @module-action="moduleAction"
          />
        </div>
      </q-scroll-area>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.q-dialog-plugin {
  background-color: var(--q-app-background-shift);
}

.q-dialog-plugin-desktop {
  margin-right: 18px;
  margin-top: -380px;
  height: 320px;
  width: 320px;
}

.q-dialog-plugin-mobile {
  height: 148px;
  min-height: 148px;
}

.q-dialog-margin {
  margin: 0 24px 64px 24px;
}
</style>
