import "./ProductItem.css";
import React from 'react';
import Button from "../Button/Button";

const ProductItem = ({product, className, onAdd}) => {

  const onAddHandle = () =>{
    onAdd(product);
  }

  return (
    <div className={"product " + product.className}>
      <div className={"img"}>
        <div className={"title"}>{product.title}</div>
        <div className={"description"}>{product.description}</div>
        <div className={"price"}>
          <span>Вартість: <b>{product.price}</b></span>
        </div>
      </div>
      <Button className={"add-btn"} onClick={onAddHandle}>
        Додати у кошик
      </Button>
    </div>
  );
};

export default ProductItem;