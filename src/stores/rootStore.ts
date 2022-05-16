import { types, unprotect } from "mobx-state-tree";
import { initialUserStoreState, UserStore } from "./userStore";

const rootStore = types
  .model({
    userStore: UserStore,
  })
  .create({
    userStore: UserStore.create(initialUserStoreState),
  });

  unprotect(rootStore);

export default rootStore;