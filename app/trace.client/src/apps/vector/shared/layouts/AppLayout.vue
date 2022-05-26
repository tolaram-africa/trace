<script setup lang="ts">
import { toRefs } from 'vue';
import { useQuasar } from 'quasar';
import { sampleUserProfile } from '@/libs/Account/Profile';
import { identityMenu, sampleRootApps } from '@/libs/Menu';
import {
  overviewMenu,
  appModuleMenu,
  appMobileMenu,
  appMobileMenuExtended,
  quickNewItems,
  appMobileMenuString,
} from '@/vector/Menu';
import { layoutState } from '@/layouts/composables/Layout';
import DesktopLayout from '@/layouts/components/DesktopLayout.vue';
import MobileLayout from '@/layouts/components/MobileLayout.vue';
import HeaderLarge from '@/layouts/header/HeaderLarge.vue';
import HeaderMobile from '@/layouts/header/HeaderMobile.vue';
import TabMobile from '@/layouts/navigation/TabMobile.vue';

const $q = useQuasar();
const { showHeader } = toRefs(layoutState);
</script>

<script lang="ts">
export default {
  name: 'AppLayout',
};
</script>

<template>
  <fragment>
    <mobile-layout
      v-if="$q.platform.is.mobile"
      :identity-items="identityMenu"
      :user-profile="sampleUserProfile"
      :root-app-items="sampleRootApps"
    >
      <template #header>
        <header-mobile
          :qucik-commands="quickNewItems"
          :module-list="appMobileMenuString"
        ></header-mobile>
      </template>
      <slot>
        <router-view></router-view>
      </slot>
      <template #footer>
        <tab-mobile
          :tab-items="appMobileMenu"
          :tab-extended-items="appMobileMenuExtended"
        ></tab-mobile>
      </template>
    </mobile-layout>

    <desktop-layout
      v-else
      :overview-items="overviewMenu"
      :module-items="appModuleMenu"
      :identity-items="identityMenu"
      :user-profile="sampleUserProfile"
      :root-app-items="sampleRootApps"
    >
      <template #header>
        <header-large
          v-show="showHeader"
          :qucik-commands="quickNewItems"
        ></header-large>
      </template>
      <slot>
        <router-view></router-view>
      </slot>
    </desktop-layout>
  </fragment>
</template>
