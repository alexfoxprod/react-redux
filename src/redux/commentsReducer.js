import { COMMENT_CREATE, COMMENT_UPDATE } from "./type";
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

    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((res) => res.id === data.id);
      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];
      return {
        ...state,
        comments: nextComments,
      };

    default:
      return state;
  }
};
