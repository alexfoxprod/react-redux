const intialState = {
  likes: 0,
};

const reducer = (state = intialState, action) => {
  console.log("reducer ===> ", action);
};

export default store;
