<script setup lang="ts">
import { appMobileMenuString } from 'src/apps/vector/Menu';
import { toRefs, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
import { storeToRefs } from 'pinia';
import { usePageStore } from 'src/shared/layouts/stores';
import { useLayoutStore } from 'src/shared/layouts/stores';
import { layoutState } from 'src/shared/layouts/composables/Layout';
import ModuleDialog from 'src/shared/layouts/navigation/ModuleDialog.vue';

const layoutStore = useLayoutStore();
const { toggleDrawer, setModuleDialogState } = layoutStore;
const { moduleDialogState } = storeToRefs(layoutStore);
const { title, showHeader, showTitle, withMobile } = storeToRefs(
  usePageStore()
);
const { moduleItems } = toRefs(layoutState);

const route = useRoute();
const router = useRouter();
const $q = useQuasar();

const titleVisibility = computed(() => {
  return showTitle.value || !withMobile.value;
});

const headerVisibility = computed(() => {
  return showHeader.value || !withMobile.value;
});

const isFocusModule = computed(() => {
  return appMobileMenuString.includes(String(route.name));
});

const showModule = () => {
  if (!moduleDialogState.value) {
    setModuleDialogState(true);
    $q.dialog({
      component: ModuleDialog,
      componentProps: {
        position: 'standard',
        seamless: false,
        persistent: false,
        mobile: true,
        moduleItems: moduleItems.value,
      },
    }).onDismiss(() => {
      setModuleDialogState(false);
    });
  }
};
</script>

<script lang="ts">
export default {
  name: 'HeaderMobile',
};
</script>

<template>
  <q-header
    v-show="headerVisibility"
    reveal
    :elevated="false"
    class="bg-transparent app-header"
  >
    <q-toolbar class="bg-transparent q-mt-xs q-px-none">
      <q-btn
        v-show="isFocusModule"
        dense
        flat
        round
        size="lg"
        icon="bi-filter-left"
        color="primary"
        @click="toggleDrawer"
      />
      <q-btn
        v-show="!isFocusModule"
        dense
        flat
        round
        size="lg"
        icon="bi-chevron-left"
        color="primary"
        @click="router.back()"
      />

      <q-toolbar-title
        class="text-primary text-h5 text-weight-bold text-center"
        >{{ titleVisibility ? title : '' }}</q-toolbar-title
      >

      <q-btn
        v-show="moduleItems.length > 0"
        dense
        flat
        round
        :size="isFocusModule ? 'md' : 'lg'"
        :icon="
          isFocusModule ? 'bi-three-dots-vertical' : 'bi-grid-3x2-gap-fill'
        "
        color="primary"
        @click="showModule"
      />
      <q-btn dense flat round size="lg" icon="bi-plus-lg" color="primary" />
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
.app-header {
  padding-top: constant(safe-area-inset-top); // for iOS 11.0
  padding-top: env(safe-area-inset-top); // for iOS 11.2 +
}
.app-nav-icon {
  border-radius: $border-radius-md;
}
</style>
