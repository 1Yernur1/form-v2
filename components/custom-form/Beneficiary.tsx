import React from 'react';
import CustomButton from '../custom-button/CustomButton';

function Beneficiary() {
  return (
    <>
      <div className="flex justify-between md:grid md:grid-cols-5 mt-5 md:items-center md:gap-y-2">
        <div className="md:col-start-1 md:col-span-2">
          <h2 className="form__title">Бенефициар:</h2>
        </div>
        <div className="md:col-start-3 md:col-span-full">
          <div className="flex gap-2">
            <div className="flex h-6 items-center relative">
              <input
                className="form__input-checkbox"
                type="checkbox"
                required
              />
            </div>
            <div>
              <label className="form__label">Резидент</label>
            </div>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-5 mt-2 md:items-center md:gap-y-2">
        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">БИН</label>
        </div>
        <div className="md:col-start-3 md:col-span-2 flex">
          <input className="form__input" type="text" />
          <CustomButton
            text="Проверить"
            styleClasses="bg-red-500 text-white md:hidden"
          />
        </div>
        <div className="md:pl-4">
          <CustomButton
            text="Проверить"
            styleClasses="bg-red-500 text-white md:block hidden"
          />
        </div>

        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">Полное наименование</label>
        </div>
        <div className="md:col-start-3 md:col-span-full">
          <input className="form__input" type="text" />
        </div>

        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">Адресс</label>
        </div>
        <div className="md:col-start-3 md:col-span-full">
          <input className="form__input" type="text" />
        </div>

        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">
            Номер государственной регистрации
          </label>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <input className="form__input" type="number" />
        </div>
        <div className="md:col-start-4 md:col-span-1 md:text-center">
          <label className="form__label">Отрасль экономики</label>
        </div>
        <div className="md:col-start-5 md:col-span-1">
          <select className="form__input">
            <option value="" selected disabled hidden></option>
            <option value="">Вариант 1</option>
            <option value="">Вариант 2</option>
            <option value="">Вариант 3</option>
            <option value="">Вариант 4</option>
            <option value="">Вариант 5</option>
          </select>
        </div>

        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">
            Дата государственной регистрации
          </label>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <input className="form__input" type="date" />
        </div>
        <div className="md:col-start-4 md:col-span-1 md:text-center">
          <label className="form__label">Сектор экономики</label>
        </div>
        <div className="md:col-start-5 md:col-span-1">
          <select className="form__input">
            <option value="" selected disabled hidden></option>
            <option value="">Вариант 1</option>
            <option value="">Вариант 2</option>
            <option value="">Вариант 3</option>
            <option value="">Вариант 4</option>
            <option value="">Вариант 5</option>
          </select>
        </div>

        <div className="md:col-start-1 md:col-span-2">
          <label className="form__label">Организационно-правовая форма</label>
        </div>
        <div className="md:col-start-3 md:col-span-1">
          <input className="form__input" type="number" />
        </div>
        <div className="md:col-start-4 md:col-span-1 md:text-center">
          <label className="form__label">Форма экономики</label>
        </div>
        <div className="md:col-start-5 md:col-span-1">
          <select className="form__input">
            <option value="" selected disabled hidden></option>
            <option value="">Вариант 1</option>
            <option value="">Вариант 2</option>
            <option value="">Вариант 3</option>
            <option value="">Вариант 4</option>
            <option value="">Вариант 5</option>
          </select>
        </div>

        <div className="md:col-start-1 md:col-span-2 md:self-start">
          <label className="form__label">
            Банковские реквизиты <br /> (наименование, адрес, № счета[IBAN])
          </label>
        </div>
        <div className="md:col-start-3 md:col-span-full">
          <textarea className="form__input" rows={3}/>
        </div>
      </div>
    </>
  );
}

export default Beneficiary;
