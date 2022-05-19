<script setup lang="ts">
import { ref } from 'vue';
const contextOptions = {
  page: {
    title: 'Task History',
  },
};

const search = ref('');
const dateTime = ref('2022-01-01 00:00');
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="q-pa-sm q-pt-md column">
      <div
        class="row q-col-gutter-x-md q-col-gutter-y-lg q-mt-sm"
        style="
          flex: 1 1 auto;
          max-height: 85vh;
          max-height: calc(100vh - 185px);
        "
      >
        <!-- Column 1 -->
        <div class="col-12 col-md-4">
          <q-card flat class="border-radius-sm q-pa-xs full-height">
            <div class="app-form q-mb-sm">
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
            One
          </q-card>
        </div>
        <!-- Column 2 -->
        <div class="col-12 col-md-4">
          <q-card flat class="border-radius-sm q-pa-xs full-height">
            <div class="app-form q-mb-sm">
              <input-date-time
                v-model="dateTime"
                label="Filter"
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
              </input-date-time>
            </div>
            Two
          </q-card>
        </div>
        <!-- Column 3 -->
        <div class="col-12 col-md-4">
          <q-card flat class="border-radius-sm q-pa-xs full-height">
            <div
              class="q-pa-sm border-radius-sm bordered-section-1 row justify-between"
              style="min-height: 48px"
            >
              <div class="text-h6 text-accent">{{ 'Details' }}</div>
              <div>
                <q-btn
                  no-caps
                  color="accent"
                  icon="bi-pencil"
                  class="self-start border-radius-sm"
                  label="Modify"
                >
                </q-btn>
              </div>
            </div>
            <div>Three</div>
          </q-card>
        </div>
      </div>
    </q-page>
  </page-wrapper>
</template>
