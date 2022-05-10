<script setup lang="ts">
import AppLogo from '@/assets/vectors/logo.svg';
import IconUnfoldMore from '@/assets/vectors/icon/google-font-unfold-more.svg';
import MenuGridRoute from '@/layouts/navigation/MenuGridRoute.vue';
import { IModule } from '@/libs/Menu';

interface IProps {
  modelValue: boolean;
  rootItems: Array<IModule>;
  name: string;
}

const props = defineProps<IProps>();
const emits = defineEmits(['update:modelValue', 'update:name']);
const setModelValue = (value: boolean) => {
  emits('update:modelValue', value);
};
</script>

<Script lang="ts">
export default {
  name: 'SidebarDesktopHeader',
};
</Script>

<template>
  <q-toolbar class="q-mt-lg q-mb-xl q-pa-none" style="min-height: 72px">
    <div v-show="props.modelValue" class="q-mx-auto" style="height: 55px">
      <app-logo class="app-logo self-start col-1 q-mx-auto" />
    </div>
    <div
      class="full-width row cursor-pointer q-px-md"
      v-show="!props.modelValue"
      style="height: 55px"
    >
      <app-logo class="app-logo self-start col-3" />
      <div class="col-9 row">
        <div class="col-10 text-no-wrap q-pl-md">
          <div class="text-h5 text-weight-medium text-primary">
            {{ props.name }}
          </div>
          <div class="text-accent-more">{{ 'Workspace' }}</div>
        </div>
        <div class="col-2 column justify-center">
          <icon-unfold-more class="icon-unfold-more"></icon-unfold-more>
        </div>
      </div>
      <q-menu
        transition-show="scale"
        transition-hide="scale"
        anchor="center middle"
        self="center middle"
        :class="props.modelValue ? 'shadow-2' : 'shadow-0'"
        @mouseover="setModelValue(false)"
        fit
      >
        <menu-grid-route :items="props.rootItems" />
      </q-menu>
    </div>
  </q-toolbar>
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
</style>
