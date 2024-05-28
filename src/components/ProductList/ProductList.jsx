import "./ProductList.css";
import React from 'react';
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({products}) => {
  return (
    <div>
      {products.map(item=>(
        <ProductItem product={item.product} onAdd={item.onAdd}/>
      ))}
    </div>
  );
};

export default ProductList;