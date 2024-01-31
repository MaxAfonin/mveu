import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({ setPage, setModalBox, token, setToken }) {
  function BasketLink() {
    if (token !== null) {
      return (
        <>
          <li onClick={() => setPage('Basket')}>Ваша корзина</li>
        </>
      )
    }
  }

  return (
    <div className="Header">
      <div class="topbar"><UserBox setModalBox={setModalBox} token={token} setToken={setToken} setPage={setPage} /></div>
      <div class="mainheader">
        <div class="logo">
        <p>Реактивный магазин</p>
        </div>
        <nav>
          <ul>
            <BasketLink />
            <li onClick={() => setPage('Main')}>На Главную</li>
          </ul>
        </nav>
      </div>
     </div>
  );
}

export default Header;