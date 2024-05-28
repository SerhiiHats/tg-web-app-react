import React from 'react';
import "./Header.css"
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const tg = window.Telegram.WebApp;

const Header = () => {

  const {user, onClose} = useTelegram();


  return (
    <div className="header">
      <Button onClick={onClose}>Закрити</Button>
      <span className="userName">
        {!!user?.username ? user.username : "some user"}
      </span>

    </div>
  );
};

export default Header;