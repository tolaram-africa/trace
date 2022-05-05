<script setup lang="ts">
import { appMobileMenu, appMobileMenuExtended } from 'src/apps/vector/Menu';
import { useQuasar } from 'quasar';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useLayoutStore } from 'src/shared/layouts/stores';
import ModuleDialog from 'src/shared/layouts/navigation/ModuleDialog.vue';

const $q = useQuasar();
const layoutStore = useLayoutStore();
const { setModuleDialogState } = layoutStore;
const { moduleDialogState } = storeToRefs(layoutStore);

const notificationsCounts = ref({
  overview: 0,
  shipment: 0,
  task: 0,
  notifications: 2,
});

const showModule = () => {
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

<template>
  <q-footer class="footer q-mx-xs">
    <q-toolbar class="q-my-xs">
      <router-link
        v-for="(appMenuItem, appMenuIndex) in appMobileMenu"
        :key="appMenuIndex"
        :to="{ name: appMenuItem.name }"
        class="cursor-pointer q-mx-auto q-mx-sm app-item"
        active-class="app-item-active"
      >
        <q-icon flat :name="appMenuItem.icon">
          <q-badge
            v-show="notificationsCounts[appMenuItem.name] > 0"
            floating
            color="red-7"
            class="badge"
            rounded
          />
        </q-icon>
      </router-link>
      <q-icon
        flat
        color="space"
        name="bi-grid-3x3-gap"
        size="lg"
        class="cursor-pointer q-mx-auto q-mx-sm"
        @click="showModule"
      />
    </q-toolbar>
  </q-footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  border-radius: $border-radius-lg $border-radius-lg 0 0;
  background-color: var(--q-app-plain);
}
.app-item {
  padding: 0.3rem 0.3rem !important;
  border-radius: $border-radius-sm !important;
  text-decoration: none !important;
  color: var(--q-space) !important;
  .q-icon {
    font-size: 2.4rem;
  }
}
.app-item-active {
  .q-icon {
    color: var(--q-action) !important;
    :hover {
      color: var(--q-action) !important;
    }
  }
}

.app-bottom-sheet {
  color: var(--q-primary);
  font-size: 1rem;
  border-radius: $border-radius-xl;
  .app-action-item {
    color: var(--q-primary);
    font-size: 1rem;
  }
}

.badge {
  font-size: unset;
  top: -0.1rem;
  right: 0.1rem;
  width: 0.2rem;
  height: 0.09rem;
}
</style>
