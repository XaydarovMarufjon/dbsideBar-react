import React from 'react';

const Page_4_3 = () => {
  // page 22 
  return (
    <>
      <div className='px-5'>
    <h4 className='text-center bg-info py-2 mb-5'>ВОССТАНОВЛЕНИЕ И УНИЧТОЖЕНИЕ ЦИФРОВЫХ ДАННЫХ С ЭЛЕКТРОННЫХ НОСИТЕЛЕЙ ИНФОРМАЦИИ</h4>
    <form className="row">
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Организация предоставленная услуга "Восстановление и уничтожение данных"</label>
            <select name="" id="" className="form-select">
               <option>Прямая и обратная ссылка на БД "Организация"</option>
              </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Основание для осуществления услуги "Восстановление и уничтожение данных"</label>
             <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Основание для оказания услуги ГУП "ЦКБ"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Номер подписанного договора, запроса и т.д.  на проведение услуги "Восстановление и уничтожение данных"</label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата подписанного договора на проведение услуги "Восстановление и уничтожение данных" (поступивщего запроса)</label>
            <input type="date" name="" id=""  className='form-control'/>
          </div>
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Сумма оплаты за услугу по договору</label>
              <select name="" id="" className="form-select">
                <option selected>Прямая  и обратная ссылки на СБ "Сумма"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Восстановление данных</label>
              <select name="" id="" className="form-select">
                <option selected>Прямая ссылка на СБ "Восстановление"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Уничтожение данных</label>
              <select name="" id="" className="form-select">
                <option selected>Прямая ссылка на СБ "Уничтожение"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Услуга "Восстановление и уничтожение данных" осуществлена подразделением ГУП "ЦКБ"</label>
              <select name="" id="" className="form-select">
                 <option selected>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Сотрудники Центра выполнившие экспертизу</label>
              <select name="" id="" className="form-select">
               <option>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата начала предоставления услуги "Восстановление и уничтожение данных"</label>
            <input type="date" name="" id=""  className='form-control'/>
          </div>
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Стадия реализации услуги (на какой стадии находится осуществление услуги "Восстановление и уничтожение данных")  </label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата окончания предоставления услуги "Восстановление и уничтожение данных"</label>
            <input type="date" name="" id=""  className='form-control'/>
          </div>
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Дополнительная информация </label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Итоговый документ по результатам реализации услуги "Восстановление и уничтожение данных" (ДОК файл на внешней папке)</label>
            <select name="" id="" className="form-select">
               <option>Прямая ссылка на ДОК файл с данными по конкретной организации на внешнем источнике (папке)</option>
              </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Источник информации об "ВУ"</label>
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

export default Page_4_3;