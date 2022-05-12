<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { IPageContext } from '@/layouts/composables/Page';
import CorePageWrapper from '@/components/CorePageWrapper.vue';
import NotFound from './assets/not-found.svg';

interface IProps {
  options: {
    page: IPageContext;
    animateEnter?: string;
    animateLeave?: string;
  };
}
const props = defineProps<IProps>();
const router = useRouter();
</script>

<script lang="ts">
export default {
  name: 'ErrorPageWrapper',
};
</script>

<template>
  <core-page-wrapper
    :page="props.options.page"
    :animate-enter="props.options.animateEnter"
    :animate-leave="props.options.animateLeave"
  >
    <slot>
      <not-found class="q-my-xl page-visual"></not-found>
      <transition
        appear
        enter-active-class="animated backInUp"
        leave-active-class="animated backInDown"
      >
        <q-btn
          color="primary"
          class="q-mt-sm border-radius-sm"
          size="lg"
          no-caps
          @click="router.back"
          outline
          style="width: 200px"
          >Go Back</q-btn
        >
      </transition>
    </slot>
  </core-page-wrapper>
</template>

<style lang="scss" scoped>
@import './shared.scss';
</style>
