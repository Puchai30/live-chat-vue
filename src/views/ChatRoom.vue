<template>
  <div class="container">
    <Nabar></Nabar>
  </div>
</template>

<script>
import { watch } from "vue";
import Nabar from "../components/Nabar";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

export default {
  components: { Nabar },

  setup() {
    let { user } = getUser();
    let router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style></style>
