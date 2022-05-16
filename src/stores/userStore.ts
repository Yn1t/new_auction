import { clearSession, saveSession } from "../utils/authService";
import { types } from "mobx-state-tree";
import { getAccountInfo, signup, signin } from "../api/authApi";

const User = types.model("User", {
  id: types.string,
  balance: types.number,
  login: types.string,
});

export const UserStore = types
  .model("UserStore")
  .props({
    user: types.maybeNull(User),
    isLoading: types.boolean,
  })
  .actions((self: any) => ({
    afterCreate: () => {
      setTimeout(() => {
        (self as any).syncAccount();
      }, 1000);
    },
    syncAccount: () => {
      self.isLoading = true;
      getAccountInfo().then(({ data: user }) => {
        self.user = User.create(user);
      }).catch(() => { }).finally(()=>{
        self.isLoading = false;
      });
    },
    signin: (email: string, pass: string) => {
      self.isLoading = true;
      signin(email, pass)
        .then((response) => {
          saveSession(email, pass);

          (self as any).syncAccount();
        })
        .catch(alert).finally(() => {
          self.isLoading = false;
        });
    },
    signup: (email: string, login: string, pass: string) => {
      self.isLoading = true;
      signup(email, pass, login)
        .then((response) => {
          saveSession(email, pass);
          (self as any).syncAccount();
        })
        .catch(alert).finally(() => {
          self.isLoading = false;
        });
    },
    logout: () => {
      self.isLoading = true;
      self.user = null;
      clearSession();
      self.isLoading = false;
    }
  }));

export const initialUserStoreState = {
  user: null,
  isLoading: true,
};