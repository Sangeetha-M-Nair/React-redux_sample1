const initalState = {
  todos: [],
  posts: [],
  todoId: "",
  postId: "",
  commentId: "",
};

export default function Reducer(state = initalState, action) {
  switch (action.type) {
    case "FETCHED_TODOS":
      return { ...state, todos: action.todos, posts: [] };
    case "FETCHED_POSTS":
      return { ...state, todos: [], posts: action.posts };
    case "FETCHED_COMMENTS":
      return { ...state, todos: [], posts: [], comments: action.comments };
    case "CAPTURE_TODO":
      return {
        ...state,
        todos: [],
        posts: [],
        commentId: "",
        postId: "",
        todoId: action.todoId,
      };
    case "CAPTURE_POST":
      return {
        ...state,
        posts: [],
        todos: [],
        todoId: "",
        commentId: "",
        postId: action.postId,
      };
    case "CAPTURE_COMMENT":
      return {
        ...state,
        posts: [],
        todos: [],
        postId: "",
        todoId: "",
        commentId: action.commentId,
      };
    default:
      return state;
  }
}
