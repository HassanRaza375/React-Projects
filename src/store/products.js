import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { ProdItems: [] },
  reducers: {
    SetProduct: (state, actions) => {
      const updatedProducts = [...state.ProdItems, actions.payload];
      localStorage.setItem("ProductsListing", JSON.stringify(updatedProducts));
      state.ProdItems = updatedProducts;
    },
    EditProduct: (state, actions) => {
      const updatedProducts = state.ProdItems.map((product) =>
        product.Id === actions.payload.Id ? actions.payload.newObj : product
      );
      localStorage.setItem("ProductsListing", JSON.stringify(updatedProducts));
      state.ProdItems = updatedProducts;
    },
    DeleteProduct: (state, actions) => {
      const updatedProducts = state.ProdItems;
      const newUpdatedProducts = updatedProducts.filter(
        (e) => e.Id !== actions.payload.Id
      );
      localStorage.setItem(
        "ProductsListing",
        JSON.stringify(newUpdatedProducts)
      );
      state.ProdItems = newUpdatedProducts;
    },
    InitializaProducts: (state) => {
      const List = JSON.parse(localStorage.getItem("ProductsListing")) || [];
      state.ProdItems = List;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
