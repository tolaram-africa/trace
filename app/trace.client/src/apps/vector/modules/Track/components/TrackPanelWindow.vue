<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { IModule } from '@/libs/Menu';
import { useTrackWindowState } from '../stores';
import TrackPanelToggle from './TrackPanelToggle.vue';
import MenuGridRoute from '@/layouts/navigation/MenuGridRoute.vue';

const { windowVisibility, showOverlay } = storeToRefs(useTrackWindowState());
const windowItems = ref<Array<IModule>>([
  {
    title: 'Objects',
    name: 'vec.track.monitor.objects',
    icon: 'bi-record-circle',
  },
  {
    title: 'History',
    name: 'vec.track.monitor.history',
    icon: 'bi-clock-history',
  },
  {
    title: 'Events',
    name: 'vec.track.monitor.events',
    icon: 'bi-bell',
  },
  {
    title: 'Locations',
    name: 'vec.track.monitor.locations',
    icon: 'bi-geo-alt',
  },
]);
</script>

<script lang="ts">
export default {
  name: 'TrackPanelWindow',
};
</script>

<template>
  <fragment>
    <track-panel-toggle v-model="windowVisibility" type="closed" />
    <div v-show="windowVisibility" class="panel-wrapper border-radius-sm">
      <q-overlay
        :no-scroll="true"
        background-color="rgba(189, 189, 189, 0.8)"
        v-model="showOverlay"
      >
        <template #body>
          <!-- Overlay content-->
          <div class="fit row justify-center items-start">
            <q-card class="border-radius-sm full-width q-py-sm">
              <menu-grid-route
                :items="windowItems"
                @grid-action="showOverlay = false"
              />
            </q-card>
          </div>
        </template>
        <q-card
          class="panel-content no-padding border-radius-sm column justify-between no-scroll"
        >
          <!-- Panel content-->
          <router-view />
        </q-card>
      </q-overlay>
      <track-panel-toggle v-model="windowVisibility" type="opened" />
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
.panel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
}

.panel-content {
  width: 395px;
  min-height: calc(100vh - 96px);
  // max-height: calc(100vh - 96px);
}
</style>
