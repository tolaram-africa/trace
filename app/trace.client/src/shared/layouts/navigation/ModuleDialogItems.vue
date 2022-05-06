<script setup lang="ts">
import { IModule } from 'src/shared/layouts/composables/Layout';

interface IProps {
  moduleItems: Array<IModule>;
}

const props = defineProps<IProps>();
const emits = defineEmits(['moduleAction']);

const moduleAction = () => {
  emits('moduleAction');
};
</script>

<script lang="ts">
export default {
  name: 'ModuleDialogItems',
};
</script>

<template>
  <router-link
    active-class="active-module"
    v-for="(sectionItem, sectionIndex) in props.moduleItems"
    :key="sectionIndex"
    class="q-pa-xs q-mx-xs text-center module"
    :to="{ name: sectionItem.name }"
    @click="moduleAction"
  >
    <q-icon
      flat
      :color="sectionItem.color"
      class="module-icon q-mb-sm"
      :name="sectionItem.icon"
    />
    <div class="module-text text-weight-thin">
      {{ sectionItem.label }}
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@mixin module-highlight($color) {
  .module-icon {
    background-color: $color !important;
    color: var(--q-primary-inverted) !important;
  }

  .module-text {
    color: $color !important;
  }
}

.module {
  width: 85px !important;
  word-wrap: break-word;
  text-decoration: none;
  .module-icon {
    font-size: 2.1rem;
    padding: 1.6rem;
    border-radius: $border-radius-sm;
    background-color: var(--q-app-background);
    :hover {
      background-color: var(--q-accent) !important;
    }
  }
  .module-text {
    font-size: 1.05rem;
    color: var(--q-primary);
    word-wrap: break-word;
  }
}

.active-module {
  @include module-highlight(var(--q-primary));
}
</style>
