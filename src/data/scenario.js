import { v4 as uuidv4 } from "uuid";

function scenario() {
  return [
    {
      stateNum: 1,
      parameter1: 30,
      parameter2: 50,
      parameter3: 50,
      parameter4: 90,
      reward1: 0,
      reward2: 0,
      reward3: 0,
      reward4: 0,
      AI: 3,
      active: false,
      id: uuidv4(),
    },
    {
      stateNum: 2,
      parameter1: 30,
      parameter2: 50,
      parameter3: 50,
      parameter4: 90,
      reward1: 2,
      reward2: 1,
      reward3: 3,
      reward4: 2,
      AI: 1,
      active: false,
      id: uuidv4(),
    },
  ];
}
export default scenario;
