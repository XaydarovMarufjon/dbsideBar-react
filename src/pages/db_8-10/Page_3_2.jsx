import React from 'react';

const Page_3_2 = () => {
  return (
  <>
    <div className='px-5'>
    <h4 className='text-center bg-info py-2 mb-5'>К О Н Т А К Т - СВЯЗЬ ЛИЦА</h4>
   
    <form className="row">
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Характер зафиксированной связи лица </label>
            <select name="" id="" className="form-select">
               <option>Прямая ссылка на СБ "Характер отношений с контактом"</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Конкретное ЛИЦО </label>
             <select name="" id="" className="form-select border-danger">
              <option selected>Откройте это меню выбора </option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Дата фиксации контакта</label>
              <select name="" id="" className="form-select border-danger">
                <option selected>Откройте это меню выбора</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Дата ввода первичной информации</label>
            <input type="date" name="" id=""  className='form-control'/>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Информацию вводил(а) (ФИО ответственного сотрудника ГУП "ЦКБ)  </label>
              <select name="" id="" className="form-select">
               <option>ABDUG‘ANIYEV AZIZBEK ULUG‘BEK O‘G‘LI</option>
               <option>ABDULAZIZOV A’ZAM ABDUSAIDOVICH</option>
               <option>ABDULLAYEV AZAMAT YUSUF O‘G‘LI</option>
               <option>ABDULLAYEV IKROM ISKANDARBEKOVICH</option>
               <option>ABDUMANONOV BAXROM AKMAL O‘G‘LI</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Дата коррекции информации</label>
              <input type="date" id="" className="form-select" />
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
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

export default Page_3_2;