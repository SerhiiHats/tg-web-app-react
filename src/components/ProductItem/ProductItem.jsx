import "./ProductItem.css";
import React from 'react';
import Button from "../Button/Button";

const ProductItem = ({product, className, onAdd}) => {
const src = require(`../../assets/img/tanuki/${product.image}`)

  const onAddHandle = () => {
    onAdd(product);
  }

  return (
    <div className={`product ${className}`}>
      <div className={"WrapImg"}>
        <img className="img" src={src} alt={src}/>
      </div>
      <div className={"title"}>{product.title}</div>
      <div className={"description"}>{product.description}</div>
      <div className={"price"}>
        <span>Вартість: <b>{product.price}</b></span>
      </div>
      <Button className={"add-btn"} onClick={onAddHandle}>
        Додати у кошик
      </Button>
    </div>
  );
};

export default ProductItem;