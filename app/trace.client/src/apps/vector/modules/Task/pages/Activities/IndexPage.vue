<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
import ActivityContainer from './components/ActivityContainer.vue';
import ActivitiesMenu from './menu';

const route = useRoute();
const router = useRouter();
const $q = useQuasar();
const search = ref<string>('');
const timeout = ref();

const contextOptions = {
  page: {
    title: 'Task Activities',
  },
};

const objectListVisible = computed(() => {
  if (route.name === 'vec.task.activities') return true;
  else return $q.platform.is.desktop;
});

onMounted(() => {
  if (objectListVisible.value && !$q.platform.is.mobile) {
    timeout.value = setTimeout(() => {
      router.push({
        name: 'vec.task.activities.summary',
        query: {
          'task-id': search.value,
        },
      });
    }, 1000);
  }
});

onBeforeUnmount(() => {
  clearTimeout(timeout.value);
});
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="q-pa-sm q-pt-md column">
      <div
        class="row q-col-gutter-x-md q-col-gutter-y-lg"
        style="flex: 1 1 auto; max-height: 85vh"
      >
        <!-- List items objects -->
        <div v-if="objectListVisible" class="col-12 col-md-4">
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

          <q-card flat class="border-radius-sm q-pa-xs full-height">
            <q-item clickable>
              <q-item-section avatar top>
                <q-avatar icon="bi-folder" color="primary" text-color="white" />
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">Holder - 1</q-item-label>
                <q-item-label caption>holder - 2</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="bi-info" color="green" />
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <!-- Content grid desktop -->
        <activity-container
          v-if="!$q.platform.is.mobile"
          :module-items="ActivitiesMenu"
          class="desktop-only"
        >
          <router-view></router-view>
        </activity-container>
        <!-- Content grid mobile -->
        <fragment v-else>
          <activity-container
            v-if="$q.platform.is.mobile"
            :module-items="ActivitiesMenu"
            class="mobile-only"
          ></activity-container>
          <router-view></router-view>
        </fragment>
      </div>
    </q-page>
  </page-wrapper>
</template>
