function calculateReward(State) {
  let rewards = [0, 0, 0, 0];
  let weights = [0.02, 0.01, 0.015, 0.1];

  for (var i = 0; i < State.length; i++) {
    rewards[i] = State[i] * weights[i];
  }
  return rewards;
}
