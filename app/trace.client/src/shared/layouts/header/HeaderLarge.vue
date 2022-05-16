<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { usePageStore } from '@/layouts/stores';
import { layoutState } from '@/layouts/composables/Layout';
import SwitcherButton from '@/layouts/navigation/SwitcherButton.vue';
import CommandList from '../navigation/CommandList.vue';
import NotificationList from './NotificationList.vue';
import { IModuleCommands } from '@/libs/Menu';

interface IProps {
  qucikCommands: Array<IModuleCommands>;
}

const props = defineProps<IProps>();
const { title, showHeader, showTitle } = storeToRefs(usePageStore());
const { moduleItems } = toRefs(layoutState);
const bellIconFill = ref(false);
</script>

<script lang="ts">
export default {
  name: 'HeaderLarge',
};
</script>

<template>
  <q-header v-show="showHeader" reveal :elevated="false" class="bg-transparent">
    <q-toolbar>
      <div
        class="text-primary text-h5 text-weight-bold text-no-wrap overflow-hidden ellipsis q-ml-md q-mr-lg"
        style="min-width: 235px; max-width: 235px"
      >
        {{ showTitle ? title : '' }}
      </div>
      <q-toolbar-title class="q-ml-sm">
        <div class="row justify-start items-center">
          <switcher-button
            class="gt-sm"
            v-show="moduleItems.length > 0"
            :items="moduleItems"
            dense
            route
          ></switcher-button>
          &nbsp;
        </div>
      </q-toolbar-title>

      <div class="row justify-start items-center q-mt-xs header-icon-button">
        <q-icon
          @mouseover="bellIconFill = true"
          @mouseout="bellIconFill = false"
          color="primary"
          class="q-mr-md cursor-pointer button-icon"
          :name="bellIconFill ? 'bi-bell-fill' : 'bi-bell'"
        >
          <q-badge floating color="red-7" class="badge" rounded />
          <q-menu
            :offset="[0, 20]"
            transition-show="scale"
            transition-hide="scale"
            self="top middle"
            class="border-radius-sm q-pa-none"
          >
            <notification-list></notification-list>
          </q-menu>
        </q-icon>
        <q-btn
          no-caps
          size="lg"
          color="primary"
          text-color="primary-inverted"
          icon="bi-plus"
          label="Create New"
          class="gt-md text-weight-medium border-radius-sm q-ml-md q-mr-sm"
        >
          <q-menu
            :offset="[-5, 10]"
            transition-show="scale"
            transition-hide="scale"
            class="border-radius-sm q-pa-sm"
          >
            <command-list :items="props.qucikCommands" />
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
</style>
