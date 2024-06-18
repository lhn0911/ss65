const initialState: number[] = [];
const ADD_RANDOM_NUMBER = 'ADD_RANDOM_NUMBER';

export const addRandomNumber = (number: number) => ({
  type: ADD_RANDOM_NUMBER,
  payload: number,
});

const ReducerRandom = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_RANDOM_NUMBER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ReducerRandom;
