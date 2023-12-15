import { keys } from "lodash";

export const helloLog = (name: string) => {
  console.log("helloLog", "data", name, keys({ name: 1, age: 2 }).join("-"));
  return name;
};

export const helloLog2 = (name: string) => {
  console.log("helloLog", "data", name);
  return name;
};
