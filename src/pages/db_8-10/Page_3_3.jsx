import React from 'react';

const Page_3_3 = () => {
  return (
    <>
    <div className='px-5'>
    <h4 className='text-center bg-info py-2 mb-5'>А Д Р Е С</h4>
    <form className="row">
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Макро регионы мира (континент)</label>
             <select name="" id="" className="form-select">
               <option selected>Откройте это меню выбора</option>
               <option>Азия</option>
               <option>Африка</option>
               <option>Европа</option>
               <option>Океания</option>
               <option>Северная и Южная Америка</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Географический регион континента</label>
              <select name="" id="" className="form-select">
                <option selected>Откройте это меню выбора</option>
                <option>Австралия и Новая Зеландия</option>
                <option>Восточная Азия</option>
                <option>Восточная Африка</option>
                <option>Восточная Европа</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Страна (государство)</label>
              <select name="" id="" className="form-select">
                <option selected>Откройте это меню выбора</option>
                <option>895	Абхазия	ABH</option>
                <option>36	Австралия	AUS</option>
                 <option>40	Австрия	AUT</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Область (штат, провинция, край, округ и т.п.)</label>
              <select name="" id="" className="form-select">
                 <option selected>   Прямая ссылка на СБ "Название области"</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Район</label>
              <select name="" id="" className="form-select">
                <option selected>Прямая ссылка на СБ "Название района"</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Населённый пункт (город, ПГТ, посёлок, кишлак, аул и т.п.)</label>
              <select name="" id="" className="form-select">
                <option selected>Прямая ссылка на СБ "Название населенного пункта"</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Улица</label>
              <select name="" id="" className="form-select">
                <option selected>Прямая ссылка на СБ "Название улицы"</option> 
              </select>
          </div>   
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">№ здания (дома, блока)</label>
              <input type="number" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">№ квартиры </label>
              <input type="number" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">№ частного дома (земельного участка) </label>
              <input type="number" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Почтовый индекс</label>
              <input type="number" id="" className="form-control" />
          </div>  
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Картографические данные "АД"  - фактическая геолокация (вводится ссылка на геолокацию "АД" - сервисы Google Maps, GIS и др)</label>
              <select name="" id="" className="form-select border-danger">
                <option selected>Текст (гиперссылка на Интернет сервис геолокации)</option> 
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Является местом дислокации (адресом прописки/ проживания) "ОР", "ХГ", "ЛЦ" </label>
            <select name="" id="" className="form-select">
               <option>Прямая  и обратная ссылки на БД "ОРГАНИЗАЦИЯ", БД "ХАКЕРСКИЕ ГРУППИРОВКИ", БД "ЛИЦО"</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Является местом фиксации киберпроисществия: "ИН", "СО", "УЯ" …</label>
            <select name="" id="" className="form-select">
               <option>Прямые и обратные ссылки на БД "ИНЦИДЕНТ", БД "СОБЫТИЕ", БД "УЯЗВИМОСТЬ" …</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Дополнительная информация </label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Источник информации о "ХГ"</label>
            <select name="" id="" className="form-select">
               <option>Прямая и обратная ссылка на БД "ИСТОЧНИК ИНФОРМАЦИИ"</option>
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

export default Page_3_3;