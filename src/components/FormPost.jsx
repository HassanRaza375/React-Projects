import React from "react";

const FormPost = () => {
  return (
    <form className="py-3">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-6">
            <input type="text" placeholder="title" className="form-control" />
          </div>
          <div className="col-lg-6">
            <button className="btn btn-success">Add new </button>
          </div>
          <div className="col-lg-12">
            <textarea
              rows="4"
              className="form-control"
              placeholder="Enter the Paragraph"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormPost;
