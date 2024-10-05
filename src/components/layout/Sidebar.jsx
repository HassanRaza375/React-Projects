import React from "react";
import { Link } from "react-router-dom";
// onClick={() => setclinks(e.LinkName)}

const Sidebar = () => {
  const links = [
    { LinkName: "Home", url: "/Home" },
    { LinkName: "Posts", url: "/all-posts" },
    { LinkName: "Create Posts", url: "/add-posts" },
  ];
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "100%", maxWidth: "241px", height: "100vh" }}
    >
      <a
        xlinkHref="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {links.map((e, idx) => {
          return (
            <li className="nav-item" key={idx + 1}>
              <Link
                to={e.url}
                className={"text-decoration-none nav-link text-white"}
                aria-current="page"
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                {e.LinkName}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="dropdown">
        <a
          xlinkHref="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" xlinkHref="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" xlinkHref="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" xlinkHref="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" xlinkHref="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
