import "./ProductList.css";
import React, {useCallback, useMemo, useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import {products} from "../../db_fake/db_fake";
import {useTelegram} from "../../hooks/useTelegram";


const ProductList = () => {
  const [things, setThings] = useState([]);
  const {tg} = useTelegram();


  const onAdd = useCallback((thing) => {
    const {id} = thing;
    const newThing = {...thing, quantity: 1};

    setThings((prevThings) => {
      const index = prevThings.findIndex(item => item.id === id);

      if (index > -1) {
        return prevThings.map((item, idx) =>
          idx === index ? {...item, quantity: item.quantity + 1} : item
        );
      } else {
        return [...prevThings, newThing];
      }
    });
  }, []);

  const totalAmount = useMemo(() => {
    return things.reduce((total, thing) => total + thing.quantity * thing.price, 0);
  }, [things]);

  if (!!things.length) {
    tg.MainButton.show();
    tg.MainButton.setParams({
      text: `Купити ${totalAmount}`,
    })
  } else {
    tg.MainButton.hide();
  }


  return (
    <div className={"list"}>
      {products.map(item => (
        <ProductItem className={"item"} key={item.id}
                     product={item}
                     onAdd={onAdd}/>
      ))}
    </div>
  );
};

export default ProductList;