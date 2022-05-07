<script setup lang="ts">
import { appMobileMenu, appMobileMenuExtended } from 'src/apps/vector/Menu';
import { ref } from 'vue';
import BottomSheet from './BottomSheet.vue';
import BottomSheetList from './BottomSheetList.vue';

const swipeModalState = ref(false);
const showModule = () => {
  swipeModalState.value = !swipeModalState.value;
  return;
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
          rounded
        >
          {{ '23+' }}
        </q-badge>
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
