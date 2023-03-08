import React from 'react';

const Page_30 = () => {
  ///page 30
  return (
    <>
      <div className='px-5'>
        <h4 className='text-center bg-info py-2 mb-5'>СЕРТИФИКАЦИЯ ИКТ (ПО)</h4>
        <form className="row">

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Организация с которым проводится взаимодействие</label>
            <select name="" id="" className="form-select">
              <option>Прямая и обратная ссылка на БД "Организация"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Вид НПА</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Вид НПА"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Осуществлена подразделением ГУП "ЦКБ"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Сотрудники Центра участвовавшие в данных мероприятиях  </label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата начала работ по НПА</label>
            <input type="date" name="" id="" className='form-control' />
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Стадия реализации (на какой стадии находится осуществление Работ по НПА) </label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Результаты Работ по НПА</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Результаты работ по НПА"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата окончания работ по НПА  </label>
            <input type="date" name="" id="" className='form-control' />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дополнительная информация   </label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Итоговый документ по результатам реализации работ по НПА (ДОК файл на внешней папке)</label>
            <select name="" id="" className="form-select">
              <option selected> Прямая ссылка на ДОК файл с данными по конкретной организации на внешнем источнике (папке)</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">  Источник информации об "СО"  </label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "ИСТОЧНИК ИНФОРМАЦИИ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата ввода первичной информации </label>
            <input type="date" id="" className="form-select" />
          </div>


          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Информацию вводил(а) (ФИО ответственного сотрудника ГУП "ЦКБ)</label>
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

export default Page_30;




