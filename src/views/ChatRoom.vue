<template>
  <div class="container">
    <Nabar></Nabar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import ChatWindow from "../components/ChatWindow";
import NewChatForm from "../components/NewChatForm";
import { watch } from "vue";
import Nabar from "../components/Nabar";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

export default {
  components: {
    ChatWindow,
    NewChatForm,
    Nabar,
  },

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
