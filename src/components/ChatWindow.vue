<template>
  <div class="chat-window">
    <div class="messages">
      <div
        class="single"
        v-for="messageData in messageDatas"
        :key="messageData.id"
      >
        <span class="created-at">{{ messageData.created_at.toDate() }}</span>
        <span class="name">{{ messageData.name }}</span>
        <span class="message">{{ messageData.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { ref } from "vue";

export default {
  setup() {
    let messageDatas = ref([]);
    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        let result = [];
        // console.log(snap.docs);
        snap.docs.forEach((doc) => {
          // console.log(doc.data());
          let document = { ...doc.data(), id: doc.id };
          // console.log(document);
          doc.data().created_at && result.push(document);
        });
        messageDatas.value = result;
        console.log(messageDatas.value);
      });
    return { messageDatas };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
