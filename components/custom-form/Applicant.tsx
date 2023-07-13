import React from 'react';

function Applicant() {
  return (
    <div className="md:grid md:grid-cols-5 mt-5 md:items-center md:gap-y-2">
      <div className="md:col-span-full">
        <h2 className="form__title">Аппликант:</h2>
      </div>
      <div className="md:col-start-1 md:col-span-2">
        <label className="form__label">Полное наименование</label>
      </div>
      <div className="md:col-start-3 md:col-span-full">
        <input className="form__input" type="text" />
      </div>
      <div className="md:col-start-1 md:col-span-2">
        <label className="form__label">БИН</label>
      </div>
      <div className="md:col-start-3 md:col-span-full">
        <input className="form__input" type="number" />
      </div>
      <div className="md:col-start-1 md:col-span-2">
        <label className="form__label">Юридический адрес</label>
      </div>
      <div className="md:col-start-3 md:col-span-full">
        <input className="form__input" type="text" />
      </div>
      <div className="md:col-start-1 md:col-span-2">
        <div className="form__label">
          Способ выпуска<span className="text-red-500">*</span>
        </div>
      </div>
      <div className="flex gap-2 md:col-start-3 md:col-span-full">
        <div className="flex h-6 items-center relative">
          <input className="form__input-checkbox" type="checkbox" required />
        </div>
        <div>
          <label className="form__label">
            в электронном виде <span className="font-semibold">(ЭБГ)</span>
          </label>
        </div>
      </div>
      <div className="md:col-start-1 md:col-span-2  md:self-start">
        <div className="form__label">Наименование портала</div>
      </div>
      <div className="flex gap-2 flex-wrap md:col-start-3 md:col-span-full">
        <div className="flex gap-2">
          <div className="flex h-6 items-center relative">
            <input className="form__input-checkbox" type="checkbox" required />
          </div>
          <div>
            <label className="form__label">
              <span className="font-semibold">goszakup.sk.kz</span> (Гос. закуп)
            </label>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex h-6 items-center relative">
            <input className="form__input-checkbox" type="checkbox" required />
          </div>
          <div>
            <label className="form__label">
              <span className="font-semibold">fms.ecc.kz</span> (СК. Фарация)
            </label>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex h-6 items-center relative">
            <input className="form__input-checkbox" type="checkbox" required />
          </div>
          <div>
            <label className="form__label">
              <span className="font-semibold">zakup.sk.kz</span> ('Самрук-Казына')
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicant;
