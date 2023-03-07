import React from 'react';

const Page_4_2 = () => {
  // 19-page
  return (
    <>  
    <div className='px-5'>
    <h4 className='text-center bg-info py-2 mb-5'>РАССЛЕДОВАНИЕ</h4>
    <form className="row">
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Основание проведения расследования</label>
            <select name="" id="" className="form-select">
               <option>Праямая ссылка на СБ "Основание экспертизы"</option>
              </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Наименование организации, запросивщая "Расследование"</label>
             <select name="" id="" className="form-select">
              <option selected>Прямая  и обратная ссылки на БД "Органиизация"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Основание для осуществления расследования</label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Номер подписанного договора, запроса и т.д.  на проведение расследования</label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата подписанного договора на проведение расследования (поступивщего запроса)</label>
            <input type="date" name="" id=""  className='form-control'/>
          </div>
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Сумма оплаты за услугу по договору</label>
              <select name="" id="" className="form-select">
                <option selected>Прямая  и обратная ссылки на СБ "Сумма"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Предмет расследования (инцидент, хакерская атака, уязвимость и т.п.)</label>
              <select name="" id="" className="form-select">
                <option selected>Прямая ссылка на СБ "Предметы расследования"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Объект экспертизы (веб-сайт, информационная система или ресурс, ПО и т.п.)</label>
              <select name="" id="" className="form-select">
                <option selected>Прямая ссылка на СБ "Обьекты расследования"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Услуга "Расследование" осуществлена подразделением ГУП "ЦКБ"</label>
              <select name="" id="" className="form-select">
                 <option selected>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Дата окончания предоставления услуги "Экспертиза веб-сайтов"</label>
              <select name="" id="" className="form-select">
               <option>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
              </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата начала предоставления услуги "Расследование"</label>
            <input type="date" name="" id=""  className='form-control'/>
          </div>
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Стадия реализации услуги (на какой стадии находится осуществление Расследовании)  </label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Выявленные несоответствия в ходе расследования </label>
            <select name="" id="" className="form-select">
               <option>Прямая ссылка на СБ "Результаты расследования"</option>
              </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата окончания предоставления услуги "Расследование"</label>
            <input type="date" name="" id=""  className='form-control'/>
          </div>
          <div className="mb-3 col-6 col-lg-4">
              <label className="form-label">Дополнительная информация </label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Итоговый документ по результатам реализации услуги "Экспертиза веб-сайтов" (ДОК файл на внешней папке)</label>
            <select name="" id="" className="form-select">
               <option>Прямая ссылка на ДОК файл с данными по конкретной организации на внешнем источнике (папке)</option>
              </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Источник информации об "РС"</label>
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

export default Page_4_2;