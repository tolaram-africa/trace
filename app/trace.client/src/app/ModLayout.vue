<script setup lang="ts">
import MainLayout from 'src/shared/layouts/MainLayout.vue';

const moduleItems = [];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <main-layout>
      <q-page class="row items-center justify-evenly">
        <router-view />
      </q-page>
    </main-layout>
  </layout-wrapper>
</template>
