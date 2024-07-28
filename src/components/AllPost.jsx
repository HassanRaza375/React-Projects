import React, { useContext } from "react";
import { PostsList as PostData } from "../store/store-posts-item";

const AllPost = () => {
  const post_items = useContext(PostData);
  return (
    <div className="container py-4">
      <div className="row g-2">
        {post_items.posList.map((e) => {
          return (
            <div className="col-lg-4" key={e.title}>
              <div className="card shadow">
                <div className="img-top">
                  <img src="" alt="" />
                </div>
                <div className="body p-3">
                  <h2>Title</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias eos ab in.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPost;
