<script setup lang="ts">
const contextOptions = {
  page: {
    title: 'Error has occured',
    showTitle: false,
    withMobile: true,
  },
};
</script>

<script lang="ts">
export default {
  name: 'ErrorPage',
};
</script>

<template>
  <error-page-wrapper :options="contextOptions"></error-page-wrapper>
</template>
