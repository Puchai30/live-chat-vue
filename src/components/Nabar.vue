<template>
  <nav v-if="user">
    <div>
      <p>Disply name {{ user.displayName }}</p>
      <p class="email">Login in as {{ user.email }}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from "vue";
import useLogout from "@/composables/useLogout";
// import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";

export default {
  setup() {
    let error = ref(null);
    // let router = useRouter();
    let { signout } = useLogout();
    let { user } = getUser();

    let logout = async () => {
      await signout();
      // router.push("/");
    };

    return { logout, error, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
