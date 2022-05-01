<script setup lang="ts">
const moduleItems = [];
</script>

<script lang="ts">
export default {
  name: 'TrackLayout',
};
</script>

<template>
  <layout-wrapper :header="false" :module-items="moduleItems">
    <q-page class="row items-center justify-evenly">
      <router-view />
    </q-page>
  </layout-wrapper>
</template>
