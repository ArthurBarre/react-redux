const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  //with switch condition
  switch (action.type) {
    case "AGE_UP":
      newState.age++;
      break;
    case "AGE_DOWN":
      newState.age--;
      break;
  }

  //with if condition

  // if (action.type === "AGE_UP") {
  //   newState.age++;
  // }
  // if (action.type === "AGE_DOWN") {
  //   newState.age--;
  // }

  return newState;

};
export default reducer;