import { keys } from "lodash";

export const helloLog = (name: string) => {
  const data = keys({ name: "phuc", age: 29 }).join("-");
  console.log("helloLog", data, name);
};
