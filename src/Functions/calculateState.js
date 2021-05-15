function calculateState(currentState, action) {
  let nextState = [0, 0, 0, 0];
  const action1Impact = [2, 0, -1, -2];
  const action2Impact = [-1, 2, 3, 0];
  const action3Impact = [-3, 2, 2, 0];
  const action4Impact = [1, 1, 1, 1];
  const naturalChange = [-1, -1, -1, -1];
  nextState = nextState - naturalChange;
  console.log("button number action", action);
  switch (action) {
    case "1":
      nextState = currentState + action1Impact;
      break;
    case "2":
      nextState = currentState + action2Impact;
      break;
    case "3":
      nextState = currentState + action3Impact;
      break;
    case "4":
      nextState = currentState + action4Impact;
      break;
    default:
      nextState = [5, 5, 5, 5];
  }
  for (var i = 0; i < nextState.length; i++) {
    if (nextState[i] > 10) {
      nextState[i] = 10;
    } else if (nextState[i] < 0) {
      nextState[i] = 0;
    }
  }

  return nextState;
}
export default calculateState;
