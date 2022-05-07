<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { usePageStore } from 'src/shared/layouts/stores';
import { useLayoutStore } from 'src/shared/layouts/stores';
import { layoutState } from 'src/shared/layouts/composables/Layout';
import ModuleDialog from 'src/shared/layouts/navigation/ModuleDialog.vue';
import { IModule } from 'src/shared/libs/Menu';

const $q = useQuasar();
const layoutStore = useLayoutStore();
const { moduleDialogState } = storeToRefs(layoutStore);
const { setModuleDialogState } = layoutStore;
const { title, showHeader, showTitle } = storeToRefs(usePageStore());
const { moduleItems } = toRefs(layoutState);

const bellIconFill = ref(false);
const gridIconFill = ref(false);
interface IModuleCommands extends IModule {
  command: string;
}
const quickCreateItems: Array<IModuleCommands> = [
  {
    name: 'vec.task.create',
    title: 'Task',
    icon: 'bi-check-circle',
    command: 'T',
  },
  {
    name: 'vec.billing.document.create',
    title: 'Document',
    icon: 'bi-file-earmark-text',
    command: 'D',
  },
  {
    name: 'vec.task.event.create',
    title: 'Event',
    icon: 'bi-calendar2',
    command: 'H',
  },
  {
    name: 'vec.location.create',
    title: 'Location',
    icon: 'bi-geo-alt',
    command: 'L',
  },
  {
    name: 'vec.location.route.create',
    title: 'Route',
    icon: 'bi-compass',
    command: 'R',
  },
];

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
      <q-toolbar-title class="q-ml-xl text-primary text-h5 text-weight-bold">{{
        showTitle ? title : ''
      }}</q-toolbar-title>

      <div class="q-mt-xs header-icon-button">
        <q-icon
          @mouseover="gridIconFill = true"
          @mouseout="gridIconFill = false"
          v-show="moduleItems.length > 0"
          color="primary"
          class="q-mr-sm cursor-pointer button-icon"
          :name="gridIconFill ? 'bi-grid-3x3-gap-fill' : 'bi-grid-3x3-gap'"
          @click="showModule"
        />
        <q-icon
          @mouseover="bellIconFill = true"
          @mouseout="bellIconFill = false"
          color="primary"
          class="q-mr-md cursor-pointer button-icon"
          :name="bellIconFill ? 'bi-bell-fill' : 'bi-bell'"
        >
          <q-badge floating color="red-7" class="badge" rounded />
        </q-icon>
        <q-btn
          no-caps
          size="lg"
          color="primary"
          text-color="primary-inverted"
          icon="bi-plus"
          label="Create New"
          class="text-weight-medium border-radius-sm q-ml-md q-mr-sm"
        >
          <q-menu
            :offset="[-5, 10]"
            transition-show="scale"
            transition-hide="scale"
            class="border-radius-sm q-pa-sm quick-create-menu"
          >
            <q-list style="min-width: 235px">
              <q-item
                v-for="(quickCreateItem, quickCreateIndex) in quickCreateItems"
                :key="quickCreateIndex"
                :to="{ name: quickCreateItem.name }"
                active-class="bg-primary"
                class="border-radius-sm"
                clickable
              >
                <q-item-section class="no-margin no-padding" avatar>
                  <q-icon color="primary" :name="quickCreateItem.icon" />
                </q-item-section>
                <q-item-section
                  class="text-body1 text-weight-bold text-primary"
                  style="margin-left: -1.2rem"
                  >{{ quickCreateItem.title }}</q-item-section
                >
                <q-item-section side>
                  <div
                    class="row items-center justify-center q-px-none q-mx-none"
                    style="min-width: 5rem"
                  >
                    <span class="col list-span-pill text-center">
                      <q-icon size="1.5em" name="bi-command" />
                    </span>
                    <span
                      class="col list-span-pill text-weight-bold text-body1 text-center q-ml-xs"
                      >{{ quickCreateItem.command }}</span
                    >
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
.header-icon-button {
  .button-icon {
    font-size: 1.9rem;
  }

  .badge {
    font-size: unset;
    top: -0.2rem;
    width: 0.2rem;
    height: 0.09rem;
  }
}

.quick-create-menu {
  .q-list {
    :hover {
      background-color: var(--q-app-background);
    }
  }

  .list-span-pill {
    border: 0.05rem solid var(--q-space);
    border-radius: $border-radius-xs;
    background-color: var(--q-app-white);
    padding: 0.15rem;
    color: var(--q-accent);
    min-height: 1.75rem;
    max-height: 1.75rem;
    max-width: 1.75rem;
  }
}
</style>
