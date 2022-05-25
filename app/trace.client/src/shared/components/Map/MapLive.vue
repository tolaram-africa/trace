<script setup lang="ts">
import MapBasic from './MapBasic.vue';
</script>

<script lang="ts">
export default {
  name: 'MapLive',
};
</script>

<template>
  <map-basic v-bind="$attrs">
    <slot></slot>
  </map-basic>
</template>
