<script setup lang="ts">
import { LControl } from '@vue-leaflet/vue-leaflet';
import MapLive from '@/components/Map/MapLive.vue';

const contextOptions = {
  page: {
    title: 'Object Monitor',
  },
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="row">
      <map-live class="col" style="height: 100vh">
        <l-control :disable-scroll-propagation="true" position="topleft">
          <q-card
            class="border-radius-sm"
            style="
              margin-top: 32px;
              margin-bottom: 32px;
              height: calc(100vh - 96px);
              width: 385px;
            "
          >
            <div class="row q-mb-sm q-pa-xs">
              <div class="col app-form">
                <input-text
                  type="search"
                  label="Search.."
                  class="border-radius-sm"
                >
                  <template #append>
                    <q-icon
                      name="bi-search"
                      class="q-mr-sm"
                      size="16"
                      color="accent"
                    ></q-icon>
                  </template>
                </input-text>
              </div>
              <q-btn
                unelevated
                icon="bi-funnel"
                color="primary"
                class="border-radius-sm q-ml-sm"
              ></q-btn>
            </div>
            <!-- <q-card-section>
            </q-card-section> -->
          </q-card>
        </l-control>
      </map-live>
    </q-page>
  </page-wrapper>
</template>
