import React, { useContext, useRef } from "react";
import { PostsList as PostData } from "../store/store-posts-item";
import { useNavigate } from "react-router-dom";
const FormPost = () => {
  const { addPost } = useContext(PostData);
  const navigate = useNavigate();
  const title = useRef(null);
  const paragraph = useRef(null);
  const reviews = useRef(null);
  const tags = useRef(null);
  const HandleFormData = () => {
    const newobj = {
      id: Math.random() + 3,
      user_id: Math.random() + 2,
      title: title.current.value,
      body: paragraph.current.value,
      views: reviews.current.value,
      tags: tags.current.value.split(","),
    };
    addPost(newobj);
    title.current.value = "";
    paragraph.current.value = "";
    reviews.current.value = "";
    tags.current.value = "";
    navigate("/all-posts");
  };
  return (
    <form className="py-3">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-6">
            <input
              type="text"
              placeholder="title"
              className="form-control"
              ref={title}
            />
          </div>
          <div className="col-lg-6">
            <button
              className="btn btn-success"
              onClick={() => HandleFormData()}
            >
              Add new{" "}
            </button>
          </div>
          <div className="col-lg-2">
            <input
              type="Number"
              placeholder="Review"
              className="form-control"
              ref={reviews}
            />
          </div>
          <div className="col-lg-8">
            <input
              type="text"
              placeholder="Tags"
              className="form-control"
              ref={tags}
            />
          </div>
          <div className="col-lg-12">
            <textarea
              rows="4"
              className="form-control"
              placeholder="Enter the Paragraph"
              ref={paragraph}
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormPost;
