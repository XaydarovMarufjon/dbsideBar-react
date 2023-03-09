import React from 'react';

const Page_29 = () => {
  ///page 29
  return (
    <>
      <div className='px-5'>
        <h4 className='text-center bg-mavzu py-2 mb-5'>МЕЖВЕДОМСТВЕННОЕ ВЗАИМОДЕЙСТВИЕ</h4>
        <form className="row">

        <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Организация с которым проводится взаимодействие</label>
            <select name="" id="" className="form-select">
              <option>Прямая и обратная ссылка на БД "Организация"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Семинар</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Семинар"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Рабочие встречи</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Рабочие встречи"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Консультации</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Консультации"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Осуществлена подразделением ГУП "ЦКБ"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Сотрудники Центра участвовавшие в данных мероприятиях</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">СДата начала Проверки и изучения </label>
            <input type="date" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Стадия реализации (на какой стадии находится осуществление Проверки и изучения)  </label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Результаты проведения Проверки и изучения </label>
            <select name="" id="" className="form-select">
              <option value="">Прямая ссылка на СБ "Проверки и изучения"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата окончания предоставления Проверки и изучения  </label>
            <input type="date" id="" className="form-control" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дополнительная информация   </label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Источник информации об "СО"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "ИСТОЧНИК ИНФОРМАЦИИ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата ввода первичной информации</label>
            <input type="date" id="" className="form-select" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">  Информацию вводил(а) (ФИО ответственного сотрудника ГУП "ЦКБ)   </label>
            <select name="" id="" className="form-select">
              <option>ABDUG‘ANIYEV AZIZBEK ULUG‘BEK O‘G‘LI</option>
              <option>ABDULAZIZOV A’ZAM ABDUSAIDOVICH</option>
              <option>ABDULLAYEV AZAMAT YUSUF O‘G‘LI</option>
              <option>ABDULLAYEV IKROM ISKANDARBEKOVICH</option>
              <option>ABDUMANONOV BAXROM AKMAL O‘G‘LI</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата коррекции информации </label>
            <input type="date" id="" className="form-select" />
          </div>
        
    
        </form>
      </div>
    </>
  );
};

export default Page_29;




