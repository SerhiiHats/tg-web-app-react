import React from 'react';
import "./Header.css"
import Button from "../Button/Button";

const tg = window.Telegram.WebApp;

const Header = () => {

  const onClose = () => {
  tg.close();
}

  return (
    <div className="header">
      <Button onClick={onClose}>Закрити</Button>
      <span className="userName">
        {tg.initDataUnsafe?.user?.username}
      </span>

    </div>
  );
};

export default Header;