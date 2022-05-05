<script setup lang="ts">
import { IProfile } from 'src/shared/libs/Account/Profile';
import { computed } from 'vue';

interface IProps {
  profile: IProfile;
  mini: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  mini: true,
});

const truncateText = (evalText: string, maxLength: number) => {
  return evalText.length > maxLength
    ? `${evalText.substring(0, maxLength)}..`
    : evalText;
};

const userFullName = computed<string>(() =>
  truncateText(`${props.profile.firstName} ${props.profile.lastName}`, 15)
);

const userEmail = computed<string>(() => truncateText(props.profile.email, 25));

const iconTextChar = computed(
  () => props.profile.firstName.charAt(0) + props.profile.lastName.charAt(0)
);
</script>

<template>
  <div :class="mini ? '' : 'q-mx-none user-state'">
    <q-avatar
      v-if="mini"
      rounded
      color="red-5"
      class="user-state-avatar"
      size="3.4em"
      text-color="white"
    >
      {{ iconTextChar }}
      <q-badge floating color="green-9" rounded />
    </q-avatar>
    <q-item v-else clickable class="q-pa-md">
      <q-item-section class="user-state-side" avatar>
        <q-avatar
          rounded
          color="red-5"
          class="user-state-avatar"
          size="3.4em"
          text-color="white"
        >
          {{ iconTextChar }}
          <q-badge floating color="green-9" rounded />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="user-state-header">
          {{ userFullName }}
        </q-item-label>
        <q-item-label caption>{{ userEmail }}</q-item-label>
      </q-item-section>
      <!-- <q-item-section side>
        <q-icon name="bi-chevron-up"></q-icon>
      </q-item-section> -->
    </q-item>
  </div>
</template>

<style lang="scss" scoped>
.user-state,
.user-state-avatar,
.q-item {
  border-radius: $border-radius-sm;
}

.user-state {
  background-color: var(--q-app-background);

  .user-state-header,
  .q-item__label--caption {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    resize: none;
  }
  .user-state-header {
    color: var(--q-primary);
    font-size: 1.6rem !important;
    font-weight: 400;
  }
  .q-item__label--caption {
    color: var(--q-secondary);
  }

  @media screen and (max-width: 900px) {
    .user-state-header {
      font-size: 1.6rem;
    }
    .q-item__label--caption {
      font-size: 0.9rem;
    }
  }
}
</style>
