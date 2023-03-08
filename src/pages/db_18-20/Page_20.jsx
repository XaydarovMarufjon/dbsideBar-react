import React from 'react';

const Page_20 = () => {
  ///page 20
  return (
    <>
      <div className='px-5'>
        <h4 className='text-center bg-info py-2 mb-5'>СЕРТИФИКАЦИЯ ИКТ (ПО)</h4>
        <form className="row">
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Организация где проводится "Проверка и изучения" </label>
            <select name="" id="" className="form-select">
              <option>Прямая и обратная ссылка на БД "Организация"</option>
            </select>
          </div>
        
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Основание для осуществления Проверки и изучении </label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Основание для оказания услуги ГУП "ЦКБ"</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Проведение Проверок и изучений совместно с </label>
            <select name="" id="" className="form-select">
              <option selected> Прямая ссылка на СБ "Совместные проверки и изучения"ЦКБ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Проверки и изучения осуществлена подразделением ГУП "ЦКБ" </label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Сотрудники Центра участвовавшие в Проверки и изучении</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">  Дата начала Проверки и изучения</label>
            <input type="date" name="" id="" className='form-control' />
          </div>


          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Стадия реализации (на какой стадии находится осуществление Проверки и изучения)</label>
            <input type="text" id="" className="form-control" />
          </div>
        
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">СРезультаты проведения Проверки и изучения </label>
            <select name="" id="" className="form-select">
              <option selected>  Прямая ссылка на СБ "Проверки и изучения"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата окончания предоставления Проверки и изучения  </label>
            <input type="date" id="" className="form-select" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дополнительная информация </label>
            <input type="text" id="" className="form-control" />
          </div>


          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Итоговый документ по результатам реализации Проверки и изучения (ДОК файл на внешней папке)</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на ДОК файл с данными по конкретной организации на внешнем источнике (папке)</option>
            </select>
          </div>


          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Источник информации об "ПИ"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "ИСТОЧНИК ИНФОРМАЦИИ"</option>
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

export default Page_20;




