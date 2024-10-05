import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productActions } from "../store/products";
import { useNavigate } from "react-router-dom";
const NewItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(productActions.InitializaProducts());
  }, [dispatch]);
  const { ProdItems } = useSelector((state) => state.products);
  const Edit_Id = window.location.href.split("add-item/")[1] || null;

  const ProductId = useRef("");
  const ProductName = useRef("");
  const ProductPrice = useRef("");
  const ProductDescription = useRef("");

  const HandleFormData = () => {
    const obj = {
      Id: ProductId.current.value,
      Name: ProductName.current.value,
      Price: ProductPrice.current.value,
      Description: ProductDescription.current.value,
    };
    ProductId.current.value = "";
    ProductName.current.value = "";
    ProductPrice.current.value = "";
    ProductDescription.current.value = "";
    if (Edit_Id) {
      dispatch(productActions.EditProduct({ Id: obj.Id, newObj: obj }));
      navigate("/cart-item");
    } else {
      dispatch(productActions.SetProduct({ ...obj }));
    }
  };
  useEffect(() => {
    if (ProdItems) {
      ProductId.current.value = ProdItems.length + 1;
    }
  }, [ProdItems]);

  useEffect(() => {
    if (Edit_Id && ProdItems) {
      const getEditData = ProdItems.find((e) => e.Id === Edit_Id);
      if (getEditData) {
        ProductId.current.value = getEditData.Id;
        ProductName.current.value = getEditData.Name;
        ProductPrice.current.value = getEditData.Price;
        ProductDescription.current.value = getEditData.Description;
      }
    }
  }, [Edit_Id, ProdItems]);
  return (
    <>
      <div className="container pt-5">
        <div className="row g-2">
          <div className="col-4">
            <label className="form-label">Product ID</label>
            <input
              type="text"
              className="form-control"
              disabled
              ref={ProductId}
            />
          </div>
          <div className="col-4">
            <label className="form-label">Product Name</label>
            <input type="text" className="form-control" ref={ProductName} />
          </div>
          <div className="col-4">
            <label className="form-label">Product Price</label>
            <input type="number" className="form-control" ref={ProductPrice} />
          </div>
          <div className="col-12">
            <label className="form-label">Product Description</label>
            <textarea
              type="number"
              className="form-control"
              ref={ProductDescription}
            />
          </div>
          <div className="col-6">
            <button
              className="btn btn-primary w-100"
              onClick={() => HandleFormData()}
            >
              Submit
            </button>
          </div>
          <div className="col-6">
            <button
              className="btn btn-info w-100 text-white"
              onClick={() => navigate("/cart-item")}
            >
              Show List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewItem;
