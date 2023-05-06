import { atom } from "recoil";

export const tweeData = atom({
  key: "tweetData",
  default: [],
});
export const loggedUser = atom({
  key: "loggedUser",
  default: "",
});