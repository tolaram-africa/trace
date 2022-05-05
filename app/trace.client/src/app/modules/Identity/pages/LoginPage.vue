<script setup lang="ts">
import { ref, reactive } from 'vue';

const contextOptions = {
  page: {
    title: 'Sign In',
  },
};
const usernameState = ref(null);
const passwordState = reactive({
  value: '',
  active: true,
  show: false,
});

const next = () => {
  passwordState.active = true;
};

const signIn = () => {
  // TODO: sign in
};
</script>

<script lang="ts">
export default {
  name: 'LoginPage',
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <div class="identity-form">
      <q-form
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        class="q-pa-lg border-radius-md bg-app-plain"
      >
        <h4 class="title text-primary q-my-none q-mb-lg font-weight-regular">
          Sign In
        </h4>
        <q-input
          v-if="!passwordState.active"
          v-model="usernameState"
          standout
          no-error-icon
          type="text"
          label="Username or Email"
          class="border-radius-sm q-my-xl"
        >
          <template #prepend>
            <q-icon name="bi-person" color="accent" />
          </template>
        </q-input>
        <q-input
          standout
          v-if="passwordState.active"
          v-model="passwordState.value"
          no-error-icon
          :type="passwordState.show ? 'text' : 'password'"
          label="Password"
          class="border-radius-sm q-my-xl"
        >
          <template #prepend>
            <q-icon name="bi-lock" color="accent" />
          </template>
          <template #append>
            <q-btn
              :icon="passwordState.show ? 'bi-eye-fill' : 'bi-eye'"
              color="accent"
              @click="passwordState.show = !passwordState.show"
              round
              dense
              flat
            />
          </template>
        </q-input>

        <div class="q-my-md">
          <q-btn
            :label="passwordState.active ? 'Sign In' : 'Next'"
            color="action"
            size="lg"
            no-caps
            @click="passwordState.active ? signIn() : next()"
            class="full-width border-radius-sm font-weight-thin"
          />
        </div>
        <div class="full-width row items-center justify-end q-py-xs q-px-xs">
          <router-link
            class="identity-link identity-text"
            :to="{ name: 'app.identity.password' }"
            >Forgot password?</router-link
          >
        </div>
      </q-form>
    </div>
  </page-wrapper>
</template>

<style lang="scss" scoped>
@import './identity.scss';
</style>
