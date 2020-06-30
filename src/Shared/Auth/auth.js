import { Cookies } from "react-cookie";

export default {
  authMessage: "",
  isLoggedIn: new Cookies().get("isLoggedIn") || false,
  userId: new Cookies().get("userId") || null,
  token: new Cookies().get("token") || null,
  firstName: new Cookies().get("firstName") || null,
};
