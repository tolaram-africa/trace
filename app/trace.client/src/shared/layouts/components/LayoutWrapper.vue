<script setup lang="ts">
import { setupLayout } from 'src/shared/layouts/composables/Layout';
import { IModule } from 'src/shared/libs/Menu';

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
