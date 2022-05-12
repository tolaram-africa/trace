<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { Fragment } from '@yunzhe35p/vue-fragment';
import { useQuasar } from 'quasar';
import BottomSheet from '@/layouts/navigation/BottomSheet.vue';
import OverlayLoading from './OverlayLoading.vue';

const $q = useQuasar();
const router = useRouter();
interface IProps {
  persistent?: boolean;
  seamless?: boolean;
  position?: 'right' | 'left' | 'top' | 'bottom';
}

const props = withDefaults(defineProps<IProps>(), {
  persistent: true,
  seamless: false,
  position: 'right',
});

const showView = ref(true);
const overlay = ref();
const timeout = ref();
const emits = defineEmits([
  'dialogForm:loading',
  'dialogForm:saved',
  'dialogForm:hide',
]);

const triggerLoading = (value: boolean) => {
  overlay.value.setModelValue(value);
  overlay.value.setLoading(value);
  emits('dialogForm:loading', value);
};

const dialogCloseHandler = () => {
  showView.value = false;
  emits('dialogForm:hide', showView.value);
};

const dialogSaveHandler = () => {
  triggerLoading(true);
  timeout.value = setTimeout(() => {
    triggerLoading(false);
  }, 3000);
};

watch(showView, () => {
  !showView.value ? router.back() : null;
});

onUnmounted(() => {
  clearTimeout(timeout.value);
});
</script>

<script lang="ts">
export default {
  name: 'DialogFormWrapper',
};
</script>

<template>
  <fragment>
    <bottom-sheet
      v-if="$q.platform.is.mobile"
      v-model:visible="showView"
      :click-outside="!props.persistent"
      :threshold="90"
      height="90vh"
    >
      <q-card class="shadow-0 transparent border-radius-md no-scroll">
        <overlay-loading ref="overlay">
          <q-card-section>
            <slot>
              <router-view></router-view>
            </slot>
          </q-card-section>
          <q-card-actions class="q-pa-md q-my-xs">
            <slot name="actions">
              <q-btn
                size="lg"
                label="Save"
                no-caps
                color="primary"
                text-color="primary-inverted"
                class="full-width border-radius-sm"
                @click="dialogSaveHandler"
              />
              <q-btn
                size="lg"
                label="Cancel"
                no-caps
                stretch
                flat
                color="primary"
                class="full-width border-radius-sm"
                @click="dialogCloseHandler"
              />
            </slot>
          </q-card-actions>
        </overlay-loading>
      </q-card>
    </bottom-sheet>
    <q-dialog
      v-else
      :persistent="props.persistent"
      :seamless="props.seamless"
      :position="props.position"
      v-model="showView"
      class="hide-scrollbar"
    >
      <q-card class="dialog-card border-radius-md no-scroll">
        <overlay-loading ref="overlay">
          <q-card-actions align="right" class="q-pa-md card-item-button">
            <slot name="actions">
              <q-btn
                size="lg"
                label="Cancel"
                no-caps
                flat
                color="primary"
                class="border-radius-sm q-mx-xs dialog-button-cancel"
                v-close-popup
                @click="dialogCloseHandler"
              />
              <q-btn
                size="lg"
                label="Save"
                no-caps
                color="primary"
                text-color="primary-inverted"
                class="border-radius-sm q-mx-xs dialog-button-save"
                @click="dialogSaveHandler"
              />
            </slot>
          </q-card-actions>
          <q-card-section
            class="q-pt-none scroll child q-pb-xl hide-scrollbar overflow-y-auto card-item-content"
          >
            <slot>
              <router-view></router-view>
            </slot>
          </q-card-section>
          <q-space />
        </overlay-loading>
      </q-card>
    </q-dialog>
  </fragment>
</template>

<style lang="scss" scoped>
.dialog-card {
  min-width: 500px;
  margin-top: 36px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  height: 90vh;
}

.body--light .dialog-card {
  background-color: var(--q-app-container);
}

.body--dark .dialog-card {
  border: 0.05rem solid var(--q-app-background);
}

.dialog-button-save {
  min-width: 140px !important;
}

.dialog-button-cancel {
  min-width: 100px !important;
}

.card-item-button {
  height: 74px;
}
.card-item-content {
  flex: 1 1 auto;
  height: calc(90vh - 74px);
}
</style>
