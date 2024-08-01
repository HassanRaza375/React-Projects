import { useReducer, createContext, useEffect } from "react";

export const PostsList = createContext({
  posList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, ...action.payload];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  const [posList, dispatchPostList] = useReducer(reducer, []);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) =>
        dispatchPostList({ type: "ADD_POST", payload: json.posts })
      );
  }, []);

  const addPost = (post) => {
    dispatchPostList({ type: "ADD_POST", payload: post });
  };

  const deletePost = (id) => {
    dispatchPostList({ type: "DELETE_POST", payload: { id } });
  };

  return (
    <PostsList.Provider value={{ posList, addPost, deletePost }}>
      {children}
    </PostsList.Provider>
  );
};

export default PostListProvider;
