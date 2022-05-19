<script setup lang="ts">
import { ref } from 'vue';
import MapCore from 'src/shared/components/Map/MapCore.vue';
const contextOptions = {
  page: {
    title: 'Route Templates',
  },
};

const search = ref('');
const sampleRouteList = ref([
  {
    name: 'LAGOS - IBADAN',
    source: 'Ikorodu Road, Ojota, Lagos, NG',
    destination: 'Ibadan, Ogun, NG',
    distance: '200km',
    duration: '2hrs',
  },
  {
    name: 'OGUN - IBADAN',
    source: 'Lagos-Ibadan Expressway, Ogun, NG',
    destination: 'Ibadan, Ogun, NG',
    distance: '120km',
    duration: '1hrs',
  },
]);
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="q-pa-sm q-pt-sm column">
      <div
        class="row q-col-gutter-x-md q-col-gutter-y-lg q-mt-xs"
        style="flex: 1 1 auto; max-height: calc(100vh - 105px)"
      >
        <!-- Column 1 -->
        <div class="col-12 col-md-4">
          <q-card flat class="border-radius-sm q-pa-xs full-height">
            <div class="row q-mb-sm">
              <div class="col app-form">
                <input-text
                  type="search"
                  v-model="search"
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
                icon="bi-plus-lg"
                color="primary"
                class="border-radius-sm q-ml-sm"
              ></q-btn>
            </div>
            <q-list v-for="(route, routeIndex) in sampleRouteList">
              <q-item :key="routeIndex" class="border-radius-sm" clickable>
                <q-item-section>
                  <q-item-label
                    class="text-weight-bold text-body2 text-primary q-py-none"
                    lines="1"
                  >
                    <span>{{ route.name }}</span>
                  </q-item-label>

                  <q-item-label
                    class="q-pl-md bg-app-container border-radius-sm q-mb-sm"
                  >
                    <div
                      class="column text-accent text-caption q-gutter-y-xs q-my-xs"
                    >
                      <span>
                        <q-icon
                          size="1.2em"
                          name="bi-geo"
                          color="green"
                          class="q-mr-xs"
                        />
                        <span>{{ route.source }}</span>
                      </span>
                      <span>
                        <q-icon
                          size="1.2em"
                          name="bi-geo"
                          color="red"
                          class="q-mr-xs"
                        />
                        <span>{{ route.destination }}</span>
                      </span>
                    </div>
                  </q-item-label>

                  <q-item-label class="text-accent no-padding no-margin">
                    <span class="text-caption bordered-section-1 q-pa-xs">
                      <q-icon
                        size="1.2em"
                        name="bi-speedometer2"
                        class="q-mr-sm"
                      ></q-icon>
                      <span>
                        {{ route.distance }}
                      </span>
                    </span>
                    <span
                      class="q-ml-sm text-caption bordered-section-1 q-pa-xs"
                    >
                      <q-icon
                        size="1.2em"
                        name="bi-clock"
                        class="q-mr-sm"
                      ></q-icon>
                      <span>
                        {{ route.duration }}
                      </span>
                    </span>
                  </q-item-label>
                </q-item-section>
                <q-item-section class="row" side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      unelevated
                      icon="bi-pencil"
                      size="sm"
                      color="accent"
                      class="q-ma-none q-px-md q-py-sm border-radius-xs"
                    ></q-btn>
                    <q-btn
                      dense
                      icon="bi-trash"
                      size="md"
                      flat
                      color="red"
                      class="q-mx-sm"
                    ></q-btn>
                  </div>
                </q-item-section>
              </q-item>
              <q-separator
                class="q-mx-md q-my-xs"
                v-if="routeIndex < sampleRouteList.length - 1"
              ></q-separator>
            </q-list>
          </q-card>
        </div>

        <!-- Column 2 -->
        <div class="col-12 col-md-8 border-radius-sm column">
          <map-core class="col border-radius-sm"></map-core>
        </div>
      </div>
    </q-page>
  </page-wrapper>
</template>
