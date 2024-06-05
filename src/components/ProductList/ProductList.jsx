import "./ProductList.css";
import React, {useCallback, useEffect, useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import {products} from "../../db_fake/db_fake";
import {useTelegram} from "../../hooks/useTelegram";


const ProductList = () => {
  const [things, setThings] = useState([]);
  const {tg, query_id} = useTelegram();

  const totalAmount = (things) => things.reduce((total, thing) => total + thing.quantity * thing.price, 0);

  const onSendData = useCallback(() => {
    const data = {
      query_id,
      products: things,
      totalPrice: totalAmount(things)
    };

    fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (tg.sendData) {
      tg.sendData(JSON.stringify(data));
    }

  }, [things])


  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);

    return () => tg.offEvent('mainButtonClicked', onSendData)
  }, [onSendData])

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

  if (!!things.length) {
    tg.MainButton.show();
    tg.MainButton.setParams({
      text: `Купити ${totalAmount(things)}`,
    })
  } else {
    tg.MainButton.hide();
  }


  return (
    <div className={"list"}>
      {products.map(item => (
        <ProductItem className={"item"} key={item.id}
                     product={item}
                     onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default ProductList;