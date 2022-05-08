<script setup lang="ts">
import { sampleUserProfile } from 'src/shared/libs/Account/Profile';
import { identityMenu, sampleRootApps } from 'src/shared/libs/Menu';
import { overviewMenu, appModuleMenu } from 'src/apps/vector/Menu';
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayoutStore } from 'src/shared/layouts/stores';
import AppLogo from 'src/assets/vectors/logo.svg';
import IconUnfoldMore from 'src/assets/vectors/icon/google-font-unfold-more.svg';
import MenuList from 'src/shared/layouts/navigation/MenuList.vue';
import MenuUser from 'src/shared/layouts/navigation/MenuUser.vue';
import ThemeSwitcher from 'src/shared/layouts/navigation/ThemeSwitcher.vue';
import MenuGridRoute from 'src/shared/layouts/navigation/MenuGridRoute.vue';

const layoutStore = useLayoutStore();
const { drawerState, drawerMiniState } = storeToRefs(layoutStore);
const showIdentityMenu = ref(false);
const miniDrawer = computed(() => drawerMiniState.value);

watch(miniDrawer, () => {
  setTimeout(() => {
    if (miniDrawer.value) showIdentityMenu.value = false;
  }, 500);
});

const setMiniDrawer = (value: boolean) => {
  drawerMiniState.value = value;
};
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
        @mouseover="setMiniDrawer(false)"
        @mouseout="setMiniDrawer(true)"
      >
        <q-scroll-area class="fit">
          <q-toolbar class="q-mt-lg q-mb-xl q-pa-none">
            <app-logo
              v-show="drawerMiniState"
              class="app-logo self-start col-1 q-mx-auto"
            />
            <div
              class="full-width row cursor-pointer q-px-md"
              v-show="!drawerMiniState"
            >
              <app-logo class="app-logo self-start col-3" />
              <div class="col-9 row">
                <div class="col-10 text-no-wrap q-pl-md">
                  <div class="text-h5 text-weight-medium text-primary">
                    Trace Vector
                  </div>
                  <div class="text-accent-more">Workspace</div>
                </div>
                <div class="col-2 column justify-center">
                  <icon-unfold-more class="icon-unfold-more"></icon-unfold-more>
                </div>
              </div>
              <q-menu
                v-show="!drawerMiniState"
                transition-show="scale"
                transition-hide="scale"
                anchor="center middle"
                self="center middle"
                :class="drawerMiniState ? 'shadow-2' : 'shadow-0'"
                @mouseover="setMiniDrawer(false)"
                fit
              >
                <menu-grid-route :items="sampleRootApps" />
              </q-menu>
            </div>
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
            <div
              @click="showIdentityMenu = !showIdentityMenu"
              class="full-width q-px-sm"
            >
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
    <q-page-container class="bg-app-container">
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

.icon-unfold-more {
  transform: scale(0.7);
  fill: var(--q-accent-more);
}

.q-drawer {
  border-radius: $border-radius-sm !important;
}
</style>
