import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { todos, posts, comments, todoId, postId, commentId } = useSelector(
    (state) => state
  );

  const handleFetch = (type, id = null) => {
    const url = `https://jsonplaceholder.typicode.com/${type}${
      id ? `/${id}` : ""
    }`;
    const actionType = `FETCHED_${type.toUpperCase()}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actionType, [type.toLowerCase()]: data })
      );
  };

  const handleInputChange = (e, type) => {
    dispatch({
      type: `CAPTURE_${type.toUpperCase()}`,
      [`${type.toLowerCase()}Id`]: e.target.value,
    });
  };

  const todosById = () => handleFetch("todos", todoId);
  const postsById = () => handleFetch("posts", postId);
  const commentsById = () => handleFetch("comments", commentId);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleFetch("todos")}>Fetch todos</button>
        <button onClick={() => handleFetch("posts")}>Fetch posts</button>
        <button onClick={() => handleFetch("comments")}>Fetch comments</button>

        <br />
        <label>
          Enter todo id to fetch{" "}
          <input onChange={(e) => handleInputChange(e, "todo")} />
        </label>
        <button onClick={todosById}>Fetch todos by id</button>
        <label>
          Enter post id to post{" "}
          <input onChange={(e) => handleInputChange(e, "post")} />
        </label>
        <button onClick={postsById}>Fetch posts by id</button>
        <label>
          Enter comments id to post{" "}
          <input onChange={(e) => handleInputChange(e, "comment")} />
        </label>
        <button onClick={commentsById}>Fetch comments by id</button>

        <h1>posts: {JSON.stringify(posts)}</h1>
        <h1> todos: {JSON.stringify(todos)}</h1>
        <h1> comments: {JSON.stringify(comments)}</h1>
      </header>
    </div>
  );
}

export default App;
