import React from 'react';

function WarrantyInformation() {
  return (
    <>
      <div className="md:grid md:grid-cols-5 mt-5 md:items-center md:gap-y-2">
        <div className="md:col-span-full">
          <h2 className="form__title">Данные по гарантий:</h2>
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">
            Номер закупки<span className="text-red-500">*</span>
          </label>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <input className="form__input" type="number" />
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">Наименование закупки</label>
        </div>
        <div className="md:col-start-3 md:col-span-full">
          <input className="form__input" type="text" />
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">Общая сумма закупки</label>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <input className="form__input" type="number" placeholder="0,00" />
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">Номер лота</label>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <input className="form__input" type="number" />
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">Наименование лота</label>
        </div>
        <div className="md:col-start-3 md:col-span-full">
          <input className="form__input" type="text" />
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">Сумма лота</label>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <input className="form__input" type="number" placeholder="0,00" />
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <div className="form__label">Валюта гарантий</div>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <input className="form__input" type="text" />
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">Сумма гарантий</label>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <input className="form__input" type="number" placeholder="0,00" />
        </div>
        <div className="md:col-start-4 md:col-span-1 md:text-center">
          <label className="form__label">Комиссия за выпуск</label>
        </div>
        <div className="md:col-start-5 md:col-span-1">
          <input className="form__input" type="number" placeholder="0,00" />
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <div className="form__label">Срок действия</div>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <input className="form__input" type="date" />
        </div>
        <div className="md:col-start-4 md:col-span-full mt-4 mb-3 md:mt-0 md:mb-0">
          <div className="flex gap-2">
            <div className="flex h-6 items-center relative md:pl-4">
              <input
                className="form__input-checkbox"
                type="checkbox"
                required
              />
            </div>
            <div>
              <label className="form__label">до полного исполнения</label>
            </div>
          </div>
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">Счет взимания комиссии</label>
        </div>
        <div className="md:col-start-3 md:col-span-full">
          <select className="form__input">
            <option value="" selected disabled hidden></option>
            <option value="">Кушать хочу</option>
            <option value="">Денег нет</option>
            <option value="">Нужно деньги зарабатывать</option>
            <option value="">Жизнь боль</option>
            <option value=""> :(</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default WarrantyInformation;
