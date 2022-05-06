<script setup lang="ts">
import { sampleUserProfile } from 'src/shared/libs/Account/Profile';
import { identityMenu } from 'src/shared/libs/Menu';
import { overviewMenu, appModuleMenu } from 'src/apps/vector/Menu';
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayoutStore } from 'src/shared/layouts/stores';
import AppLogo from 'src/assets/vectors/logo.svg';
import MenuList from 'src/shared/layouts/navigation/MenuList.vue';
import MenuUser from 'src/shared/layouts/navigation/MenuUser.vue';
import ThemeSwitcher from 'src/shared/layouts/navigation/ThemeSwitcher.vue';

const layoutStore = useLayoutStore();
const { drawerState, drawerMiniState } = storeToRefs(layoutStore);
const miniDrawer = computed(() => drawerMiniState.value);
const showIdentityMenu = ref(false);

watch(miniDrawer, () => {
  setTimeout(() => {
    if (miniDrawer.value) showIdentityMenu.value = false;
  }, 500);
});
</script>

<script lang="ts">
export default {
  name: 'DesktopLayout',
};
</script>

<template>
  <q-layout view="lHh lpR lfr" class="non-selectable hide-scrollbar">
    <div class="app-main-drawer">
      <q-drawer
        v-model="drawerState"
        show-if-above
        bordered
        :width="320"
        :mini-width="64"
        side="left"
        :mini="miniDrawer"
        mini-to-overlay
        @mouseover="drawerMiniState = false"
        @mouseout="drawerMiniState = true"
      >
        <q-scroll-area class="fit">
          <q-toolbar class="q-mt-lg q-mb-mb q-ma-none q-pa-none">
            <app-logo class="app-logo q-mx-auto" />
          </q-toolbar>

          <div v-show="!showIdentityMenu" class="q-mt-lg">
            <menu-list :mini="true" :items="overviewMenu"></menu-list>
            <q-separator class="q-my-xs q-mx-sm" />
            <menu-list :mini="true" :items="appModuleMenu"></menu-list>
          </div>
          <div v-show="showIdentityMenu" class="q-mt-xl">
            <menu-list
              :mini="true"
              :items="identityMenu"
              class="q-mt-xl"
            ></menu-list>
          </div>

          <!-- Fixed navigation action -->
          <div class="fixed-bottom full-width column items-center q-mb-sm">
            <div v-show="!miniDrawer" class="q-mb-md">
              <q-btn
                v-show="showIdentityMenu"
                no-caps
                size="lg"
                color="primary"
                text-color="primary-inverted"
                icon="bi-box-arrow-in-right"
                label="Sign Out"
                class="full-width text-weight-thin border-radius-sm q-mx-md"
              ></q-btn>

              <theme-switcher v-show="!showIdentityMenu" />
            </div>

            <!-- App user widget for mini and normal state -->
            <menu-user
              v-show="miniDrawer"
              :mini="true"
              :profile="sampleUserProfile"
              class="q-mb-md"
            />
            <div @click="showIdentityMenu = !showIdentityMenu">
              <menu-user
                v-show="!miniDrawer"
                :mini="false"
                :profile="sampleUserProfile"
                class="q-mb-sm"
              />
            </div>
          </div>
        </q-scroll-area>
      </q-drawer>
    </div>

    <!-- Module grid drawer -->
    <slot name="module-drawer"></slot>
    <slot name="header"></slot>
    <q-page-container class="bg-app-container q-ma-none q-pa-none">
      <slot>
        <router-view />
      </slot>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.app-logo {
  width: 54px;
  height: 54px;
  fill: var(--q-primary);
  border-radius: $border-radius-sm;
}

.q-drawer {
  border-radius: $border-radius-sm !important;
}
</style>
