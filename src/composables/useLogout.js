import { auth } from "@/firebase/config";

let signout = async () => {
  try {
    let res = await auth.signOut();

    console.log("logout");
  } catch (err) {
    error.value = err.message;
  }
};

let useLogout = () => {
  return { signout };
};

export default useLogout;
