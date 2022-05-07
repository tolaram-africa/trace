<script setup lang="ts">
import { appMobileMenu, appMobileMenuExtended } from 'src/apps/vector/Menu';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { storeToRefs } from 'pinia';
import { useLayoutStore } from 'src/shared/layouts/stores';
import ModuleDialog from 'src/shared/layouts/navigation/ModuleDialog.vue';
import BottomSheet from './BottomSheet.vue';
import BottomSheetList from './BottomSheetList.vue';

const $q = useQuasar();
const swipeModalState = ref(false);
const layoutStore = useLayoutStore();
const { setModuleDialogState } = layoutStore;
const { moduleDialogState } = storeToRefs(layoutStore);

const showModule = () => {
  swipeModalState.value = !swipeModalState.value;
  return;
  if (!moduleDialogState.value) {
    setModuleDialogState(true);
    $q.dialog({
      component: ModuleDialog,
      componentProps: {
        position: 'bottom',
        seamless: false,
        persistent: false,
        mobile: true,
        marginClass: 'q-dialog-margin',
        moduleItems: appMobileMenuExtended,
      },
    }).onDismiss(() => {
      setModuleDialogState(false);
    });
  }
};
</script>

<script lang="ts">
export default {
  name: 'TabMobile',
};
</script>

<template>
  <q-footer class="app-footer q-px-xs">
    <q-tabs
      active-color="action"
      align="justify"
      no-caps
      switch-indicator
      narrow-indicator
      indicator-color="action"
      content-class="mobile-footer-item"
      class="text-space"
    >
      <q-route-tab
        v-for="(appMenuItem, appMenuIndex) in appMobileMenu"
        :key="appMenuIndex"
        :name="appMenuItem.name"
        :to="{ name: appMenuItem.name }"
        :icon="appMenuItem.icon"
      >
        <q-badge
          v-show="appMenuItem.name === 'app.notifications'"
          floating
          color="red-7"
          class="badge"
          rounded
        />
      </q-route-tab>
      <q-route-tab name="more" icon="bi-grid-3x3-gap" @click="showModule" />
    </q-tabs>
    <bottom-sheet v-model:visible="swipeModalState" :threshold="150">
      <bottom-sheet-list
        @update:visible="swipeModalState = false"
        :items="appMobileMenuExtended"
      />
    </bottom-sheet>
  </q-footer>
</template>

<style lang="scss" scoped>
.app-footer {
  border-radius: $border-radius-lg $border-radius-lg 0 0;
  background-color: var(--q-app-plain);

  .badge {
    font-size: unset;
    top: 0.4rem;
    right: 0.3rem;
  }
}
</style>
