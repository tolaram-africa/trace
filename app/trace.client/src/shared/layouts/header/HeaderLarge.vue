<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { usePageStore } from 'src/shared/layouts/stores';
import { layoutState } from 'src/shared/layouts/composables/Layout';
import SwitcherButtonRoute from 'src/shared/layouts/navigation/SwitcherButtonRoute.vue';
import CommandList from '../navigation/CommandList.vue';
import { quickNewItems } from 'src/apps/vector/Menu';

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
      <q-toolbar-title class="q-ml-md">
        <div class="row justify-start items-center">
          <div class="text-primary text-h5 text-weight-bold q-mx-md">
            {{ showTitle ? title : '' }}
          </div>
          <switcher-button-route
            v-show="moduleItems.length > 0"
            :items="moduleItems"
          />
        </div>
      </q-toolbar-title>

      <div class="q-mt-xs header-icon-button">
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
            class="border-radius-sm q-pa-sm"
          >
            <div
              class="text-center"
              style="min-width: 300px; min-height: 400px"
            >
              <q-icon
                class="q-mt-md"
                color="primary"
                name="bi-bell"
                size="4em"
              ></q-icon>
            </div>
          </q-menu>
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
            class="border-radius-sm q-pa-sm"
          >
            <command-list :items="quickNewItems" />
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
