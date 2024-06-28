<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div
        class="single"
        v-for="messageData in formatMsgData"
        :key="messageData.id"
      >
        <span class="created-at">{{ messageData.created_at }}</span>
        <span class="name">{{ messageData.name }}</span>
        <span class="message">{{ messageData.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";

export default {
  setup() {
    let messageDatas = ref([]);
    let msgBox = ref(null);

    let formatMsgData = computed(() => {
      return messageDatas.value.map((msgdata) => {
        let formatTime = formatDistanceToNow(msgdata.created_at.toDate());
        return { ...msgdata, created_at: formatTime };
      });
    });

    onUpdated(() => {
      msgBox.value.scrollTop = msgBox.value.scrollHeight;
    }),
      db
        .collection("messages")
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
          // console.log(messageDatas.value);
        });
    return { messageDatas, formatMsgData, msgBox };
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
