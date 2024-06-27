<template>
  <form>
    <textarea
      placeholder="text message and hit enter to send"
      v-model="message"
      @keypress.enter="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import getUser from "@/composables/getUser";
import { ref } from "vue";
import { timestap } from "../firebase/config";

export default {
  setup() {
    let message = ref("");
    let { user } = getUser();
    let handleSubmit = () => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at: timestap(),
      };
      console.log(chat);
    };
    return { handleSubmit, message };
  },
};
</script>

<style>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
