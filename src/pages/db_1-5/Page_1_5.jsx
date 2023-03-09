import React from 'react';

const Page_1_5 = () => {
  return (
    <>
    <div className='px-5'>
    <h4 className='text-center bg-mavzu py-2 mb-5'>АИСМ ИБ ГУП "ЦЕНТР КИБЕРБЕЗОПАСНОСТИ</h4>
   
    <form className="row">
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Наименование Департамента / Самостоятельного отдела "ЦК"</label>
              <select name="" id="" className="form-select">
                 <option selected>Прямая и обратная ссылка на БД "ОРГАНИЗАЦИЯ"</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Наименование "СМ"</label>
              <select name="" id="" className="form-select">
                 <option selected>Откройте это меню выбора</option>
                 <option>LanSec</option>
                 <option>Eagle Eye 1.0</option>
                 <option>Eagle Eye 2.0</option>
                 <option>WAF</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Дата подключения "ОР" к "СМ"</label>
              <input type="date" id="" className="form-select" />
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Основание на подключение "ОР" к "СМ" </label>
            <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Текущее состояния подключения к "СМ" к веб-ресурсам "ОР"</label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Крайняя дата ревизии состояния функционирования подключений веб-ресурсов "ОР" к "СМ" </label>
              <input type="date" id="" className="form-select" />
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">"СМ" зафикцированы:  инцидент / событие / уязвимость / угроза для ИБ</label>
              <select name="" id="" className="form-select">
                <option selected>Прямые и обратные ссылки на БД "ИН", БД "СО", БД "УЯ", БД "УГ"</option>
              </select>
          </div>    
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Дата отключения веб-ресурсов "ОР" от "СМ"</label>
            <input type="date" name="" id=""  className='form-control'/>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Основание (причина) отключения веб-ресурсов "ОР" от "СМ"</label>
            <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Дополнительная информация</label>
            <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Источник информации о "СМ" </label>
              <select name="" id="" className="form-select">
               <option>Прямая и обратная ссылка на БД "ИСТОЧНИК ИНФОРМАЦИИ"</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Дата ввода первичной информации</label>
              <input type="date" id="" className="form-select" />
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

export default Page_1_5;