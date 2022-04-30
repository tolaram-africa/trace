<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { usePageStore } from 'src/shared/layouts/stores';
import { useLayoutStore } from 'src/shared/layouts/stores';
import { layoutState } from 'src/shared/layouts/composables/Layout';
import ModuleDialog from 'src/shared/layouts/navigation/ModuleDialog.vue';

const $q = useQuasar();
const layoutStore = useLayoutStore();
const { moduleDialogState } = storeToRefs(layoutStore);
const { setModuleDialogState } = layoutStore;
const { title, showHeader, showTitle } = storeToRefs(usePageStore());
const { moduleItems } = toRefs(layoutState);

const bellIconFill = ref(false);
const gridIconFill = ref(false);

const showModule = () => {
  if (!moduleDialogState.value) {
    setModuleDialogState(true);
    $q.dialog({
      component: ModuleDialog,
      componentProps: {
        position: 'right',
        seamless: true,
        persistent: false,
        mobile: false,
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
  name: 'HeaderLarge',
};
</script>

<template>
  <q-header v-show="showHeader" reveal :elevated="false" class="bg-transparent">
    <q-toolbar>
      <q-toolbar-title class="q-ml-xl text-primary">{{
        showTitle ? title : ''
      }}</q-toolbar-title>
      <q-icon
        @mouseover="bellIconFill = true"
        @mouseout="bellIconFill = false"
        color="primary"
        class="q-mr-md cursor-pointer icon"
        :name="bellIconFill ? 'bi-bell-fill' : 'bi-bell'"
      >
        <q-badge floating color="red-7" class="badge" rounded />
      </q-icon>
      <q-icon
        @mouseover="gridIconFill = true"
        @mouseout="gridIconFill = false"
        v-show="moduleItems.length > 0"
        color="primary"
        class="q-mr-sm cursor-pointer icon"
        :name="gridIconFill ? 'bi-grid-3x3-gap-fill' : 'bi-grid-3x3-gap'"
        @click="showModule"
      />
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
.icon {
  font-size: 1.9rem;
}

.badge {
  font-size: unset;
  top: -0.2rem;
  width: 0.2rem;
  height: 0.09rem;
}
</style>
