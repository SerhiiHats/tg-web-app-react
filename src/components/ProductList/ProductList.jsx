import "./ProductList.css";
import React from 'react';
import ProductItem from "../ProductItem/ProductItem";



const ProductList = () => {
  const products = [
    {id: "1", title: "Джинси", price: 1200, description: "Блакитного кольору"},
    {id: "2", title: "Джинси", price: 1200, description: "Блакитного кольору"},
    {id: "3", title: "Джинси", price: 1200, description: "Блакитного кольору"},
    {id: "4", title: "Джинси", price: 1200, description: "Блакитного кольору"},
    {id: "5", title: "Джинси", price: 1200, description: "Блакитного кольору"},
    {id: "6", title: "Джинси", price: 1200, description: "Блакитного кольору"},
    {id: "7", title: "Джинси", price: 1200, description: "Блакитного кольору"},
    {id: "8", title: "Джинси", price: 1200, description: "Блакитного кольору"},
  ]
  const onAdd = ()=>{}
  return (
    <div className={"list"}>
      {products.map(item=>(
        <ProductItem className={"item"} key={item.id}
                     product={item}
                     className={""}
                     onAdd={onAdd}/>
      ))}
    </div>
  );
};

export default ProductList;