import React from 'react';
import CustomButton from '../custom-button/CustomButton';

function FormBottom() {
  return (
    <>
      <p className='font-medium leading-6 text-sm text-gray-900 mt-5'>
        Подписывая настоящее Заявление, Апликант присоединяется к Стандартным
        условиям выпуска тендерной гарантии (бланковой), размещенным на сайте{' '}
        <a href="https://altyn.kz">https://altyn.kz</a>
      </p>
      <div className='flex justify-between mt-5'>
        <CustomButton text='Отмена' styleClasses='border'/>
        <CustomButton text='Сохранить' styleClasses='bg-red-500 text-white'/>
      </div>
    </>
  );
}

export default FormBottom;
