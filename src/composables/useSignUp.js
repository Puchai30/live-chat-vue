import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);

let createAccount = async (email, password, displayName) => {
  try {
    let res = await auth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Could not create user");
    }
    res.user.updateProfile({ displayName });
    return res;
  } catch (err) {
    error.value = err.message;
    // console.log(error.value);
  }
};

let useSignUp = () => {
  return { createAccount, error };
};

export default useSignUp;
