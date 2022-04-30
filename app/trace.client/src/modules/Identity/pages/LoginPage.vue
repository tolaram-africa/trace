<script setup lang="ts">
import { ref, reactive } from 'vue';

const contextOptions = {
  page: {
    title: 'Sign In',
  },
};

const passwordState = reactive({
  password: '',
});

const remember = ref(true);
const passwordView = ref(false);
const passwordShow = ref(false);

const next = () => {
  passwordView.value = true;
};

const signIn = () => {};
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
          v-if="!passwordView"
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
          v-if="passwordView"
          no-error-icon
          :type="passwordShow ? 'text' : 'password'"
          label="Password"
          class="border-radius-sm q-my-xl"
        >
          <template #prepend>
            <q-icon name="bi-lock" color="accent" />
          </template>
          <template #append>
            <q-btn
              :icon="passwordShow ? 'bi-eye-fill' : 'bi-eye'"
              color="accent"
              @click="passwordShow = !passwordShow"
              round
              dense
              flat
            />
          </template>
        </q-input>

        <div class="q-my-md">
          <q-btn
            :label="passwordView ? 'Sign In' : 'Next'"
            color="action"
            size="lg"
            no-caps
            @click="passwordView ? signIn() : next()"
            class="full-width border-radius-sm font-weight-thin"
          />
        </div>
        <div class="full-width row items-center justify-end q-py-xs q-px-xs">
          <router-link
            class="identity-link identity-text"
            :to="{ name: 'identity.password' }"
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
