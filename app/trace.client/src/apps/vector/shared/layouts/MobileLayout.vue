<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { sampleUserProfile } from 'src/shared/libs/Account/Profile';
import { identityMenu } from 'src/shared/libs/Menu';
import { useLayoutStore } from 'src/shared/layouts/stores';
import HeaderMobile from 'src/shared/layouts/header/HeaderMobile.vue';
import TabMobile from 'src/shared/layouts/navigation/TabMobile.vue';
import MenuList from 'src/shared/layouts/navigation/MenuList.vue';
import MenuUser from 'src/shared/layouts/navigation/MenuUser.vue';
import ThemeSwitcher from 'src/shared/layouts/navigation/ThemeSwitcher.vue';

const layoutStore = useLayoutStore();
const { drawerState } = storeToRefs(layoutStore);
</script>

<script lang="ts">
export default {
  name: 'MobileLayout',
};
</script>

<template>
  <q-layout view="lHh lpR fFf" class="non-selectable hide-scrollbar">
    <div class="app-main-drawer">
      <q-drawer
        :width="320"
        v-model="drawerState"
        overlay
        behavior="mobile"
        side="left"
      >
        <q-scroll-area class="fit q-px-sm column items-center">
          <div class="q-mb-sm q-mt-lg q-mx-sm">
            <menu-user :mini="false" :profile="sampleUserProfile" />
          </div>
          <div class="q-pt-lg">
            <menu-list :mini="false" :items="identityMenu"></menu-list>
          </div>

          <div class="fixed-bottom column items-center q-mb-lg q-px-lg">
            <div class="q-mb-lg">
              <theme-switcher></theme-switcher>
            </div>
            <q-btn
              no-caps
              size="lg"
              color="primary"
              text-color="primary-inverted"
              icon="bi-box-arrow-in-right"
              label="Sign Out"
              class="full-width text-weight-thin border-radius-sm"
            ></q-btn>
          </div>
        </q-scroll-area>
      </q-drawer>
    </div>

    <header-mobile></header-mobile>
    <q-page-container class="bg-app-container">
      <slot>
        <router-view />
      </slot>
    </q-page-container>

    <tab-mobile></tab-mobile>
  </q-layout>
</template>
