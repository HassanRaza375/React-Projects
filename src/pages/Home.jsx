import React, { useContext } from "react";
import { FaClipboardList } from "react-icons/fa6";
import { MdChecklistRtl } from "react-icons/md";

import { PostsList as PostData } from "../store/store-posts-item";
const Home = () => {
  const { posList } = useContext(PostData);

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

export default Home;
