import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";

import { PostsList as PostData } from "../store/store-posts-item";

const AllPost = () => {
  const { posList, deletePost } = useContext(PostData);
  return (
    <div className="container py-4">
      <div className="row g-2">
        {posList.length > 0 &&
          posList.map((e, idx) => {
            return (
              <div className="col-lg-4" key={idx + 2}>
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
                    <p>{e.body}</p>
                    <h3 className="py-3">views:{e.views}</h3>
                    <div
                      className={
                        "alert alert-primary mt-4" +
                        " " +
                        (idx % 2 === 0 && "alert-secondary")
                      }
                      role="alert"
                    >
                      {e.tags.map((e, i) => {
                        return (
                          <span className="mr-2" key={i + 11 + "a"}>
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
