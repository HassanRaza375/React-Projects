import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useDispatch } from "react-redux";
import { productActions } from "../store/products";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productActions.InitializaProducts());
  }, [dispatch]);
  const { ProdItems } = useSelector((state) => state.products);

  const HandleDelete = (e) => {
    dispatch(productActions.DeleteProduct({ Id: e.Id }));
  };

  const HandleEdit = (e) => {
    navigate("/add-item/" + e.Id);
  };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-[18px] fw-bold">Cart Items Listing</h1>
          </div>
        </div>
        <div className="row pt-3 g-2">
          {ProdItems.length > 0 ? (
            ProdItems.map((e, i) => {
              return (
                <div className="col-4" key={e.Name}>
                  <div className="card shadow-lg p-3">
                    <div className="card-title flex justify-end">
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Action
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <button
                              className="dropdown-item"
                              type="button"
                              onClick={() => HandleEdit(e, i)}
                            >
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item"
                              type="button"
                              onClick={() => HandleDelete(e, i)}
                            >
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <h2>
                        <b>Id:</b> {e.Id || ""}
                      </h2>
                      <h2>
                        <b>Name:</b> {e.Name || ""}
                      </h2>
                      <p>
                        <b>Price:</b> {e.Price || ""}
                      </p>
                      <p className="max-w-[500px] text-truncate">
                        <b>Description:</b> {e.Description || ""}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12">
              <h1>No Product to Show</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartItem;
