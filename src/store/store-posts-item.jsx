import { useReducer, createContext } from "react";
const defaultpostlist = [
  {
    id: 1,
    user_id: 3,
    title: "Javascript",
    paragraph: "lorem fsdflsdfklsjfkl sjflsdkfjsdklfjk",
    reviews: 45,
    tags: ["fun", "thrill", "exciting"],
  },
  {
    id: 2,
    user_id: 2,
    title: "FrameWorks",
    paragraph: "lorem fsdflsdfklsjfkl sjflsdkfjsdklfjk",
    reviews: 4,
    tags: ["Rough", "Eagerness", "DownFall"],
  },
];
export const PostsList = createContext({
  posList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  const [posList, dispatchPostList] = useReducer(reducer, [...defaultpostlist]);

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
