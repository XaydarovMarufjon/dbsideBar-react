import React from 'react';

type Props = {};

const Page_1_3 = (props: Props) => {
  return (
    <>
     <div className='px-5'>
         <h4 className='text-center bg-info py-2 mb-5'>ПОДРАЗДЕЛЕНИЕ (СОТРУДНИК) ИБ (ИКТ) ОРГАНИЗАЦИИ</h4>
     
          <form className="row">
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наименование штатного или аутсорсного подразделения "ПБ"</label>
                <select name="" id="" className="form-select">
                   <option selected>Откройте это меню выбора</option>
                   <option>нет данных</option>
                   <option>1-бўлим</option>
                   <option>AKT infratuzilmasini rivojlantirish va axborot xavfsizligini ta'minlash bo'limi</option>
                   <option>Axborot komunikatsiya texnologiyalrinini joriy etish va rivojlantirish</option>
                   <option>Axborot-kommunikatsiya texnologiyalari bo`limi</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Услуги по обеспечению ИБ "ОР" оказываются в штатном режиме / в формате аутсорсинга / по разовому найму </label>
                <select name="" id="" className="form-select">
                   <option selected>Откройте это меню выбора</option>
                   <option>Штатное подразделение</option>
                   <option>Штатный сотрудник</option>
                   <option>В режиме аутсорсинга</option>
                   <option>По разовому найму на договорной основе</option>
                   <option>Другое</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">"ПБ" (сотрудник) является структурным подразделением (штатным сотрудников) "ОР"   </label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая и обратная ссылка на БД "ОРГАНИЗАЦИЯ", БД "ЛИЦО"</option>
                </select>
            </div>
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Организация или Лицо, оказывающая (-ее) услуги по обеспечению "ИБ" для "ОР" на аутсорсинговой основе</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая и обратная ссылка на БД "ОРГАНИЗАЦИЯ", БД "ЛИЦО"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наличие корпоративной сети (включая беспроводные) на "ОИ"</label>
                <input type="number" id="" className="form-control" />
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Ответственный руководитель "ПБ"</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая и обратная ссылка на БД "ЛИЦО"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Отвественный сотрудник "ПБ"</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая и обратная ссылка на БД "ЛИЦО"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Контур охвата "ПБ" услугами ИБ в рамках "ОИ" в "ОР" (установленная зона ответственности "ПБ" в "ОР") </label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая и обратная ссылка на БД "ИНФОРМАЦИОННАЯ ИНФРАСТРУКТУРА ОБЪЕКТОВ ИНФОРМАТИЗАЦИИ"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наличие структурной связи "ПБ" с другим "ПБ" </label>
                <select name="" id="" className="form-select">
                  <option selected>Прямые и обратные ссылки на БД "ПОДРАЗДЕЛЕНИЕ (СОТРУДНИК) ИБ ОРГАНИЗАЦИИ", БД "ЛИЦО"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Фактическое место дислокации (адрес) "ПБ"</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая и обратная ссылка на БД "АДРЕС"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">"ПБ" зафикцированы:  инцидент / событие / уязвимость / угроза для ИБ / нарушитель / хакерская группировка</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямые и обратные ссылки на БД "ИН", БД "СО", БД "УЯ", БД "УГ", БД "НР", БД "ХГ"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Контактные данные "ПБ" для оперативного взаимодействия (телефон, адрес электронно почты и тп)</label>
                <input type="text" id="" className="form-control" />
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Дополнительная информация</label>
                <input type="text" id="" className="form-control" />
            </div>  
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Источник информации о "ПБ"</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая и обратная ссылка на БД "ИСТОЧНИК ИНФОРМАЦИИ"</option>
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

export default Page_1_3;