<script setup lang="ts">
import { setupLayout, IModule } from 'src/shared/layouts/composables/Layout';

export interface IProps {
  moduleItems: Array<IModule>;
  header?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  moduleItems: () => [],
  header: true,
});

setupLayout({
  moduleItems: props.moduleItems,
  showHeader: props.header,
});
</script>

<template>
  <slot>
    <router-view></router-view>
  </slot>
</template>
