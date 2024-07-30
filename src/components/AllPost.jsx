import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";

import { PostsList as PostData } from "../store/store-posts-item";

const AllPost = () => {
  const { posList, deletePost } = useContext(PostData);
  return (
    <div className="container py-4">
      <div className="row g-2">
        {posList.map((e, idx) => {
          return (
            <div className="col-lg-4" key={e.title}>
              <div className="card shadow position-relative">
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  onClick={() => deletePost(e.id)}
                >
                  <TiDelete />
                </span>
                <div className="img-top">
                  <img src="" alt="" />
                </div>
                <div className="body p-3">
                  <h2>{e.title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias eos ab in.
                  </p>
                  <div
                    className={
                      "alert alert-primary mt-4" +
                      " " +
                      (idx % 2 === 0 && "alert-secondary")
                    }
                    role="alert"
                  >
                    {e.tags.map((e) => {
                      return (
                        <span className="mr-2" key={e}>
                          #{e}
                        </span>
                      );
                    })}
                  </div>
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
