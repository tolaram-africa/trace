<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { IPageContext } from 'src/shared/layouts/composables/Page';
import CorePageWrapper from 'src/shared/components/CorePageWrapper.vue';

interface IProps {
  options: {
    page: IPageContext;
    animateEnter?: string;
    animateLeave?: string;
  };
}
const props = defineProps<IProps>();
const router = useRouter();
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
  >
    <slot>
      <q-img
        no-native-menu
        no-spinner
        class="q-my-xl page-visual"
        src="./assets/under-construction.svg"
      />
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
          @click="router.push({ name: 'root' })"
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
