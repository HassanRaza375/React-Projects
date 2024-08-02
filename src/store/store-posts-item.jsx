import { useReducer, createContext, useEffect } from "react";

export const PostsList = createContext({
  posList: [],
  addPost: () => {},
  deletePost: () => {},
  FetchPost: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.id);
    case "Fetch_POST":
      return [...action.payload];
    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => FetchPost(json.posts));
  }, []);
  const [posList, dispatchPostList] = useReducer(reducer, []);

  const addPost = (post) => {
    dispatchPostList({ type: "ADD_POST", payload: post });
  };
  const FetchPost = (post) => {
    dispatchPostList({ type: "Fetch_POST", payload: post });
  };

  const deletePost = (id) => {
    dispatchPostList({ type: "DELETE_POST", payload: { id } });
  };

  return (
    <PostsList.Provider value={{ posList, addPost, deletePost, FetchPost }}>
      {children}
    </PostsList.Provider>
  );
};

export default PostListProvider;
