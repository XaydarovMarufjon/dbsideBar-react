import React from 'react';

const Page_4_4 = () => {
  return (
    <>
    <div className='px-5'>
    <h4 className='text-center bg-info py-2'>Р Е А Г И Р О В А Н И Е - ПРИНЯТЫЕ МЕРЫ</h4>
    <form className="row">
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Источник информации о "ХГ"</label>
            <select name="" id="" className="form-select">
               <option>Прямая и обратная ссылка на БД "ИСТОЧНИК ИНФОРМАЦИИ"</option>
              </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата ввода первичной информации</label>
            <input type="date" name="" id=""  className='form-control'/>
          </div>
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Информацию вводил(а) (ФИО ответственного сотрудника ГУП "ЦКБ)  </label>
              <select name="" id="" className="form-select">
               <option>ABDUG‘ANIYEV AZIZBEK ULUG‘BEK O‘G‘LI</option>
               <option>ABDULAZIZOV A’ZAM ABDUSAIDOVICH</option>
               <option>ABDULLAYEV AZAMAT YUSUF O‘G‘LI</option>
               <option>ABDULLAYEV IKROM ISKANDARBEKOVICH</option>
               <option>ABDUMANONOV BAXROM AKMAL O‘G‘LI</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Дата коррекции информации</label>
              <input type="date" id="" className="form-select" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Информацию корректировал (а) (ФИО ответственного сотрудника ГУП "ЦКБ) </label>
              <select name="" id="" className="form-select">
               <option>ABDUG‘ANIYEV AZIZBEK ULUG‘BEK O‘G‘LI</option>
               <option>ABDULAZIZOV A’ZAM ABDUSAIDOVICH</option>
               <option>ABDULLAYEV AZAMAT YUSUF O‘G‘LI</option>
               <option>ABDULLAYEV IKROM ISKANDARBEKOVICH</option>
               <option>ABDUMANONOV BAXROM AKMAL O‘G‘LI</option>
              </select>
          </div> 
    </form>
    </div>
  </>
  );
};

export default Page_4_4;