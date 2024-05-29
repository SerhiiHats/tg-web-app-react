import "./ProductList.css";
import React from 'react';
import ProductItem from "../ProductItem/ProductItem";



const ProductList = () => {
  const products = [
    {id: "1", title: "Джинси", price: 1200, description: "Блакитного кольору"},
    {id: "2", title: "Сорочка", price: 900, description: "Фіолетового кольору"},
    {id: "3", title: "Футболка", price: 700, description: "Червоного кольору"},
    {id: "4", title: "Жакет", price: 1500, description: "Темного кольору"},
    {id: "5", title: "Спідниця", price: 1200, description: "Білого кольору"},
    {id: "6", title: "Куртка", price: 2700, description: "Сафарі кольору"},
    {id: "7", title: "Поло", price: 1600, description: "Синього кольору"},
    {id: "8", title: "Піджак", price: 2150, description: "Сірого кольору"},
  ]
  const onAdd = ()=>{}
  return (
    <div className={"list"}>
      {products.map(item=>(
        <ProductItem className={"item"} key={item.id}
                     product={item}
                     onAdd={onAdd}/>
      ))}
    </div>
  );
};

export default ProductList;