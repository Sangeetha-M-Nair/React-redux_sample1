const middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    console.log(action);
    switch (action.type) {
      case "FETCH_TODO_BY_ID":
        fetch(`https://jsonplaceholder.typicode.com/todos/${action.todoId}`)
          .then((response) => response.json())
          .then((json) => dispatch({ type: "FETCHED_TODOS", todos: json }));
        break;
      case "FETCH_POST_BY_ID":
        fetch(`https://jsonplaceholder.typicode.com/posts/${action.postId}`)
          .then((response) => response.json())
          .then((json) => dispatch({ type: "FETCHED_POSTS", posts: json }));
        break;
      case "FETCH_COMMENT_BY_ID":
        fetch(
          `https://jsonplaceholder.typicode.com/comments/${action.commentId}`
        )
          .then((response) => response.json())
          .then((json) =>
            dispatch({ type: "FETCHED_COMMENTS", comments: json })
          );
        break;
      case "FETCH_TODO":
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => dispatch({ type: "FETCHED_TODOS", todos: json }));
        break;
      case "FETCH_POST":
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => dispatch({ type: "FETCHED_POSTS", posts: json }));
        break;
      case "FETCH_COMMENT":
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((response) => response.json())
          .then((json) =>
            dispatch({ type: "FETCHED_COMMENTS", comments: json })
          );
        break;
      default:
        break;
    }
    next(action);
  };

export default middleware;
