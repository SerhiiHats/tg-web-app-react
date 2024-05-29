import "./Form.css";
import React, {useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('physical');

  const {tg} = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      city,
      street,
      subject
    };

    if (tg.sendData) {
      tg.sendData(JSON.stringify(data));
    }

  }, [country, city, street])

  useEffect(() => {
      tg.onEvent('mainButtonClicked', onSendData);

      return () => tg.offEvent('mainButtonClicked', onSendData)
  }, [onSendData])

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Надіслати дані",
      // color - button color;
      // text_color - button text color;
      // is_active - enable the button;
      // is_visible - show the button.
    })
  }, []);

  useEffect(() => {
    if (!country || !city || !street) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, city, street, subject])


  const onChangeCountry = (e) => setCountry(e.target.value);
  const onChangeCity = (e) => setCity(e.target.value);
  const onChangeStreet = (e) => setStreet(e.target.value);
  const onChangeSubject = (e) => setSubject(e.target.value);

  return (
    <div className="form">
      <h3>Додайте ваші дані</h3>
      <input
        className={"input"}
        type="text"
        value={country}
        onChange={onChangeCountry}
        placeholder="Країна"/>
      <input
        className={"input"}
        type="text"
        value={city}
        onChange={onChangeCity}
        placeholder="Місто"/>
      <input
        className={"input"}
        type="text"
        value={street}
        onChange={onChangeStreet}
        placeholder="Вулиця"/>
      <select
        className={"select"}>
        <option
          value="physical"
          onChange={(e) => onChangeSubject(e)}>
          Фізична особа
        </option>
        <option
          value="legal"
          onChange={(e) => onChangeSubject(e)}>
          Юрид. особа
        </option>
      </select>
    </div>
  );
};

export default Form;