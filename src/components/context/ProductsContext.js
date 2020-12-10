import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [available, setAvailable] = useState([]);
  const [stock, setStock] = useState([]);
  
  useEffect(() => {
    axios.get("http://t.ikontent.hu/share/task-js3284732.json").then((res) => {
        setProducts(res.data.items);
        setAvailable(res.data.availableItemIds);
        setStock(res.data.stock)
    });
  }, []);


  return (
    <ProductContext.Provider
      value={[products, setProducts, available, setAvailable, stock, setStock]}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
