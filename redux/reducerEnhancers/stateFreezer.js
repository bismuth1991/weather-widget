import deepFreeze from 'deep-freeze';

const stateFreezer = reducer => (state, action) => {
  // freeze the state and run the original reducer
  deepFreeze(state);
  const newState = reducer(state, action);

  // freeze and return the result state
  deepFreeze(newState);
  return newState;
};

export default stateFreezer;
