<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { notificationMenu } from 'src/shared/libs/Menu';
import SwitcherButton from '../navigation/SwitcherButton.vue';

const $q = useQuasar();
const notifyValue = ref('all');
</script>

<script lang="ts">
export default {
  name: 'NotificationList',
};
</script>

<template>
  <div v-bind="$attrs" :class="$q.platform.is.mobile ? 'window-width' : ''">
    <switcher-button
      v-model="notifyValue"
      :items="notificationMenu"
      style="min-width: 260px"
      class="q-mt-sm q-mx-sm"
    ></switcher-button>
    <div class="text-center" style="min-height: 360px; min-width: 300px">
      <q-icon
        class="q-ma-xl"
        color="primary"
        name="bi-bell"
        size="4em"
      ></q-icon>
    </div>
  </div>
</template>
