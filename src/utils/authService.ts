import { getAccountInfo } from "../api/authApi";

const LOGIN_KEY = "login";
const PASSWORD_KEY = "password";

export const saveSession = (login: string, password: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOGIN_KEY, login);
    localStorage.setItem(PASSWORD_KEY, password);
  }
};

export const getSession = () => {
  if (typeof window !== "undefined") {
    return {
      login: localStorage.getItem(LOGIN_KEY) || "",
      password: localStorage.getItem(PASSWORD_KEY) || "",
    };
  }
  return null;
};

export const clearSession = () => {
  localStorage.removeItem(LOGIN_KEY);
  localStorage.removeItem(PASSWORD_KEY);
}

// export async function getServerSideAuthProps() {
//   const user = await getAccountInfo();
  
//   if (user.data) {
//     return { props: {} };
//   }
//   else
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       }
//     }
// }