<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const contextOptions = {
  page: {
    title: 'Verify OTP',
  },
};
const router = useRouter();
const otpInput = ref([]);
const otpInputValue = ref(['', '', '', '']);

const verifyToken = () => {
  router.push({
    name: 'identity.sign-in',
  });
};

const handleKey = (index: number) => {
  let element = otpInput.value;
  let value = otpInputValue.value;
  if (typeof Number(value[index]) !== 'number') return;
  if (value[index].length > 1) value[index] = value[index].slice(0, 1);
  if (value[index] !== '')
    element[index + 1] !== undefined ? element[index + 1].focus() : null;
  else if (value[index] === '')
    index - 1 > -1 ? element[index - 1].focus() : null;
};
</script>

<script lang="ts">
export default {
  name: 'VerifyPage',
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
            Verify OTP
          </h4>
        </div>

        <div class="full-width q-my-xl row justify-center">
          <q-input
            v-for="(verifyItem, verifyIndex) in 4"
            :ref="
              (el) => {
                otpInput[verifyIndex] = el;
              }
            "
            maxlength="1"
            v-model="otpInputValue[verifyIndex]"
            :key="verifyIndex"
            :rules="[(val) => val.length <= 1]"
            type="number"
            standout
            no-error-icon
            class="border-radius-sm q-mx-sm verify-input"
            @keyup="handleKey(verifyIndex)"
          />
        </div>

        <q-separator class="q-mb-xl q-mx-lg" />

        <div class="q-my-md">
          <q-btn
            label="Verify"
            color="action"
            size="lg"
            no-caps
            class="full-width border-radius-sm font-weight-thin"
            @click="verifyToken"
          />
        </div>
        <div class="full-width row items-center justify-center q-pa-xs q-px-md">
          <p>
            Didn't recieve a code?
            <router-link
              class="identity-link identity-text font-weight-regular"
              :to="{ name: 'identity.sign-in' }"
              >Resend</router-link
            >
          </p>
        </div>
      </q-form>
    </div>
  </page-wrapper>
</template>

<style lang="scss" scoped>
@import './identity.scss';

.verify-input {
  width: 64px;
  height: 64px;
  text-align: center !important;
}
</style>
