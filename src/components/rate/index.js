import React from "react";
import { NavLink } from "react-router-dom";
import { PresentBox } from "../export/svg";
import "./rate.scss";
function Rate() {
  function priceUser(price, number) {
    return Math.floor(Number(price) / Number(number) / 3);
  }

  const TariffItem = [
    {
      mainTitle: "Начало",
      users: [
        {
          number: "10",
          price: "9900",
        },
        {
          number: "50",
          price: "17100",
        },
      ],
      userTo: "10-50",
      storage: true,
      individual: true,
      integration: false,
      edit: false,
      version: false,
    },
    {
      mainTitle: "Тугади",
      users: [
        {
          number: "100",
          price: "99000",
        },
        {
          number: "500",
          price: "2233232",
        },
      ],
      userTo: "100-500",
      storage: false,
      individual: true,
      integration: false,
      edit: false,
      version: false,
    },
    {
      mainTitle: "ааа",
      users: [
        {
          number: "100",
          price: "990020",
        },
        {
          number: "500",
          price: "22332332",
        },
      ],
      userTo: "10-50",
      storage: false,
      individual: true,
      integration: false,
      edit: false,
      version: false,
    },
    {
      mainTitle: "вввв",
      users: [
        {
          number: "100",
          price: "232323",
        },
        {
          number: "500",
          price: "44444",
        },
      ],
      userTo: "10-50",
      storage: false,
      individual: true,
      integration: false,
      edit: false,
      version: false,
    },
  ];
  return (
    <div className="rate_container">
      <div className="rate">
        <h1>Тарифы</h1>
        <p>
          Сравните пакеты предложений и выберите подходящие возможности и
          стоимость
        </p>
        <div className="tariff_blocks_period">
          <p>Квартал</p>
          <div className="tariff_blocks_period_switch">
            <div className="switch"></div>
          </div>
          <div className="tariff_blocks_period_year">
            <p>Год</p>
            <div className="tariff_img">
              <PresentBox />
            </div>
            <div className="tariff_title_flex">
              <p>2 месяца</p>
              <p>даром</p>
            </div>
          </div>
        </div>
        <div className="tariff_block_item">
          {TariffItem.map((item, index) => {
            return (
              <div key={index} className="tariff_block_card">
                {item?.users.map((user, i) => {
                  return (
                    <input
                      defaultChecked={i === 0}
                      type="radio"
                      name={item?.mainTitle}
                      id={user?.price}
                      className={`tariff_block_card_radio ${
                        i === 0 ? "first" : "second"
                      } `}
                    />
                  );
                })}
                <h1>{item?.mainTitle}</h1>
                <p>Пользователей</p>
                <div className="tariff_card_number">
                  {item?.users.map((user, i) => {
                    return (
                      <button key={i}>
                        <label htmlFor={user?.price}>{user?.number}</label>
                      </button>
                    );
                  })}
                </div>
                <div className="tariff_card_price">
                  {item?.users.map((user) => {
                    return (
                      <h1>
                        <p>{user?.price}</p>
                      </h1>
                    );
                  })}
                  <h2>за квартал</h2>{" "}
                  <div className="user__price__months">
                    {item?.users.map(({ price, number }) => {
                      return (
                        <p>
                          {priceUser(price, number)} за пользователя в месяц
                        </p>
                      );
                    })}
                  </div>
                  <button>ЗАКАЗАТЬ</button>
                  <NavLink to={"#"}>Оплатить онлайн</NavLink>
                </div>
                <div className="tariff_card_price_bottom">
                  <p>{item?.userTo} пользователей</p>
                  <p>
                    {item?.storage
                      ? "50 ГБ для хранения данных"
                      : "Безлимитное хранилище"}
                  </p>
                  <p>{item?.individual && "Индивидуальный стиль"}</p>
                  <p>{item?.integration && "Интеграции"}</p>
                  <p>{item?.edit && "Спец. тарифы на доработки"}</p>
                  <p>{item?.version && "Box-версия (опционально)"}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rate;
