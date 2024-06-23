<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName" />
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
import useSignUp from "@/composables/useSignUp";
import { ref } from "vue";

export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let { createAccount, error } = useSignUp();

    let signUp = async () => {
      let res = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      console.log(res.user);
    };
    return { displayName, email, password, signUp, error };
  },
};
</script>

<style></style>
