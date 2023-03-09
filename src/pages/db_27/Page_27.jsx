import React from 'react';

const Page_27 = () => {
  ///page 27
  return (
    <>
      <div className='px-5'>
        <h4 className='text-center bg-mavzu py-2 mb-5'>ИСТОЧНИК   ИНФОРМАЦИИ</h4>
        <form className="row">

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Категория (виды) источника "ИИ" </label>
            <select name="" id="" className="form-select">
              <option>Официальные сообщения СМИ</option>
              <option>Официальное уведомление министерств и ведомств Республики Узбекистан о компьютерном инциденте</option>
              <option>Официальное уведомление министерств и ведомств Республики Узбекистан о компьютерной атаке</option>
              <option>Официальное уведомление министерств и ведомств Республики Узбекистан об уязвимости</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"><b>ИСТОЧНИК ИНФОРМАЦИИ</b></label>
            <select name="" id="" className="form-select">
              <option selected>Прямые и обратные ссылки на ВСЕ БАЗЫ ДАННЫХ (кроме "ИИ")</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата получения (регистрации) "ИИ"</label>
            <input type="date" name="" id="" className='form-control' />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Время получения (регистрации) "ИИ"</label>
            <input type="time" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Класс (степень) конфиденциальности (закрытости) "ИИ"</label>
            <select name="" id="" className="form-select">
              <option selected>Государственная тайна</option>
              <option >Коммерческая тайна </option>
              <option >Банковская тайна</option>
              <option >Профессиональная тайна</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Степень важности "ИИ"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Предметы Сертификации ПО"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Услуга "СЕРТИФИКАЦИЯ ПО" осуществлена подразделением ГУП "ЦКБ"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Сотрудники Центра участвовавшие в Сертификации данного ПО</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата начала предоставления услуги "Сертификации ПО"</label>
            <input type="date" id="" className="form-select" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Стадия реализации услуги (на какой стадии находится осуществление Сертификации ПО) </label>
            <input type="text" id="" className="form-control" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата окончания предоставления услуги "Сертификации ПО"</label>
            <input type="date" id="" className="form-select" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дополнительная информация</label>
            <input type="text" id="" className="form-control" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Итоговый документ по результатам реализации услуги "Экспертиза ИС на соответствие ИБ" (ДОК файл на внешней папке)</label>
            <select name="" id="" className="form-select ">
              <option>Прямая ссылка на ДОК файл с данными по конкретной организации на внешнем источнике (папке)</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Источник информации об "СT"</label>
            <select name="" id="" className="form-select ">
              <option>Прямая и обратная ссылка на БД "ИСТОЧНИК ИНФОРМАЦИИ"</option>
            </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата ввода первичной информации</label>
            <input type="date" name="" id="" className='form-control' />
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

export default Page_27;




