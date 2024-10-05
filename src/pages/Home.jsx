import React, { useContext } from "react";
import { FaClipboardList } from "react-icons/fa6";
import { MdChecklistRtl } from "react-icons/md";
// import { PostsList as PostData } from "../store/store-posts-item";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  // const { posList } = useContext(PostData);
  const posList = useLoaderData();
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="card bg-warning">
            <div className="card-body text-[white] flex flex-col justify-center items-center">
              <span className="display-5">
                <FaClipboardList />
              </span>
              <p>Number of Posts ({posList.length})</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card bg-info">
            <div className="card-body text-[white] flex flex-col justify-center items-center">
              <span className="display-5">
                <MdChecklistRtl />
              </span>
              <p>Number of New Posts ({posList.length})</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const postLoader = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
};
export default Home;
