<template>
  <nav>
    <div>
      <p>Disply name</p>
      <p class="email">Login in as Email</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { auth } from "@/firebase/config";
import { ref } from "vue";
export default {
  setup() {
    let error = ref(null);

    let logout = async () => {
      try {
        await auth.signOut();
        console.log("logout");
      } catch (err) {
        error.value = err.message;
      }
    };

    return { logout, error };
  },
};
</script>

<style></style>
