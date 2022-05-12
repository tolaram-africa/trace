<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { IPageContext } from '@/layouts/composables/Page';
import CorePageWrapper from '@/components/CorePageWrapper.vue';
import UnderConstruction from './assets/under-construction.svg';

interface IProps {
  options: {
    page: IPageContext;
    animateEnter?: string;
    animateLeave?: string;
  };
}
const props = defineProps<IProps>();
const $q = useQuasar();
</script>

<script lang="ts">
export default {
  name: 'PageWrapper',
};
</script>

<template>
  <core-page-wrapper
    :page="props.options.page"
    :animate-enter="props.options.animateEnter"
    :animate-leave="props.options.animateLeave"
    v-bind="$attrs"
  >
    <slot>
      <under-construction class="q-my-xl page-visual"></under-construction>
      <transition
        v-show="$q.platform.is.desktop"
        appear
        enter-active-class="animated backInUp"
        leave-active-class="animated backInDown"
      >
        <q-btn
          color="primary"
          class="q-mt-sm border-radius-sm"
          size="lg"
          no-caps
          :to="{ name: 'app.root' }"
          outline
          style="width: 200px"
          >Home</q-btn
        >
      </transition>
    </slot>
  </core-page-wrapper>
</template>

<style lang="scss" scoped>
@import './shared.scss';
</style>
