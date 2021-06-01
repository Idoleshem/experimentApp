import { v4 as uuidv4 } from "uuid";

export const instructionsData = [
  {
    name: "instruction1",
    text: "Your first task is ...",
    id: uuidv4(),
    active: false,
  },
  {
    name: "instruction2",
    text: "Your second task is ...",
    id: uuidv4(),
    active: false,
  },
];
