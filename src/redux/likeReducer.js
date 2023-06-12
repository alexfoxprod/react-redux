import { INCREMENT, DECREMENT } from "./type";
const intialState = {
  likes: 0,
};

export const likeReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      };
    case DECREMENT:
      if (state.likes > 0) {
        return {
          ...state,
          likes: state.likes - 1,
        };
      }
    default:
      return state;
  }
};
