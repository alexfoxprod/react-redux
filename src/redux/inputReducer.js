import { INPUT_TEXT } from "./type";
const intialState = {
  text: "",
};

export const inputReducer = (state = intialState, action) => {
  console.log("inputReducer ==>", action);
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text,
      };

    default:
      return state;
  }
};
