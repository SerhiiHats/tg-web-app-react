import "./ProductItem.css";
import React from 'react';
import Button from "../Button/Button";

const ProductItem = ({product, className, onAdd}) => {
  const {title, price, description, image} = product;

  const src = require(`../../assets/img/tanuki/${image}`)

  const onAddHandle = () => {
    onAdd(product);
  }

  return (
    <div className={`product ${className}`} title={title}>
      <div className={"WrapImg"}>
        <img className="img" src={src} alt={`фото ${title}`}/>
      </div>
      <div className={"title"}>{title}</div>
      <div className={"description"}>{description}</div>
      <div className={"price"}>
        <span>Вартість: <b>{price}</b></span>
      </div>
      <Button className={"add-btn"} onClick={onAddHandle}>
        Додати у кошик
      </Button>
    </div>
  );
};

export default ProductItem;