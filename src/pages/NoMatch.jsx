import React from "react";

const NoMatch = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1
              className="d-flex flex-column justify-center align-center text-center display-3 text-danger"
              style={{ height: "calc(100vh - 100px)" }}
            >
              404
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoMatch;
