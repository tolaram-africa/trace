<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const contextOptions = {
  page: {
    title: 'Password Reset',
  },
};
const router = useRouter();

const usernameState = ref(null);
const selectOtpOption = () => {
  router.push({
    name: 'app.identity.password-otp',
  });
};
</script>

<script lang="ts">
export default {
  name: 'PasswordPage',
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
        <div class="q-my-none q-mb-lg">
          <h4 class="title text-primary font-weight-regular q-my-sm">
            Forgot Password?
          </h4>
        </div>

        <q-input
          v-model="usernameState"
          standout
          no-error-icon
          type="text"
          label="Username or Email"
          class="border-radius-sm q-my-xl"
        >
          <template #append>
            <q-icon name="bi-person" color="accent" />
          </template>
        </q-input>

        <div class="q-my-md">
          <q-btn
            label="Next"
            color="action"
            size="lg"
            no-caps
            class="full-width border-radius-sm font-weight-thin"
            @click="selectOtpOption"
          />
        </div>
        <div class="full-width row items-center justify-center q-pa-xs q-px-md">
          <router-link
            class="identity-link identity-text"
            :to="{ name: 'app.identity.sign-in' }"
            >Back to Sign In</router-link
          >
        </div>
      </q-form>
    </div>
  </page-wrapper>
</template>

<style lang="scss" scoped>
@import './identity.scss';
</style>
