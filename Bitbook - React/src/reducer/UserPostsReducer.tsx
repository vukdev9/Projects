export default (state: any, action: any) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post: any) => post.id !== action.payload),
      };
    default:
      return state;
  }
};
