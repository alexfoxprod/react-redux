import { COMMENT_CREATE } from "./type";
const intialState = {
  comments: [],
};

export const commentsReducer = (state = intialState, action) => {
  console.log("commentsReducer ==>", action);

  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };

    default:
      return state;
  }
};
