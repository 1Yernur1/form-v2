import React from 'react';

function FormTop() {
  return (
    <>
      <div className="md:flex md:justify-end lg:grid lg:grid-cols-5">
        <div className="sm:col-start-3 sm:col-span-full sm:grid sm:grid-rows-1 sm:gap-5">
          <div className="sm:row-start-1 sm:grid sm:grid-rows-1 sm:gap-5 sm:items-center">
            <label className="form__label-top sm:row-start-1">Номер заявки</label>
            <div className="sm:row-start-1">
              <input className="form__input" type="number" />
            </div>
          </div>
          <div className="sm:row-start-1 sm:grid sm:grid-rows-1 sm:gap-5 sm:items-center">
            <label className="form__label-top sm:row-start-1">Дата заявки</label>
            <div className='sm:row-start-1'>
              <input className="form__input " type="date" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormTop;
