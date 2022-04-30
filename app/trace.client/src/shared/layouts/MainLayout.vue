<script setup lang="ts">
import { toRefs } from 'vue';
import { useQuasar } from 'quasar';
import { layoutState } from 'src/shared/layouts/composables/Layout';
import { Fragment } from '@yunzhe35p/vue-fragment';
import DesktopLayout from './DesktopLayout.vue';
import MobileLayout from './MobileLayout.vue';
import HeaderLarge from 'src/shared/layouts/header/HeaderLarge.vue';

const $q = useQuasar();
const { showHeader } = toRefs(layoutState);
</script>

<script lang="ts">
export default {
  name: 'MainLayout',
};
</script>

<template>
  <fragment>
    <mobile-layout v-if="$q.platform.is.mobile">
      <slot>
        <router-view></router-view>
      </slot>
    </mobile-layout>

    <desktop-layout v-else>
      <!--
        <template #module-drawer></template>
      -->
      <template #header>
        <header-large v-show="showHeader"></header-large>
      </template>
      <slot>
        <router-view></router-view>
      </slot>
    </desktop-layout>
  </fragment>
</template>
