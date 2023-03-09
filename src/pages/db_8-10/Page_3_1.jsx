import React from 'react';

const Page_3_1 = () => {
  return (
    <>
    <div className='px-5'>
    <h4 className='text-center bg-mavzu py-2 mb-5'>Л И Ц О</h4>
   
    <form className="row">
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Фамилия "ЛЦ"</label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Имя "ЛЦ"</label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Отчество "ЛЦ"</label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Ф.И.О. "ЛЦ" на латинице (если "ЛЦ" является нерезидентом Республики Узбекистан)</label>
              <input type="text" id="" className="form-control" placeholder='только латинская графика' />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Никнейм, Псевдоним (если имеется, а также при отнесении "ЛЦ" к хакерам, участникам "ХГ")</label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Дата, месяц, год рождения "ЛЦ"</label>
            <input type="date" name="" id=""  className='form-control'/>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Место рождения (страна) "ЛЦ"</label>
              <select name="" id="" className="form-select">
                <option selected>Откройте это меню выбора</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Пол "ЛЦ"</label>
              <select name="" id="" className="form-select">
                <option selected>Откройте это меню выбора</option> 
                <option>мужской</option>
                <option>женский</option>
        </select>
          </div>   
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Гражданство "ЛЦ"</label>
              <select name="" id="" className="form-select border-danger">
                <option selected>Откройте это меню выбора</option> 
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Фотография "ЛЦ"</label>
              <select name="" id="" className="form-select">
                <option selected>Прямая ссылка на графический файл с фотографией лица на внешнем источнике (папке) </option> 
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Контактный телефон "ЛЦ" (телефонные номера: внутренняя, ГТС, мобильная)</label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Адрес электронной почты "ЛЦ"</label>
              <input type="email" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Юзернейм (аккаунт) "ЛЦ" в соцсетях</label>
              <input type="text" id="" className="form-control" />
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Социальное положение (статус) "ЛЦ"</label>
              <select name="" id="" className="form-select border-danger">
                <option selected>Откройте это меню выбора</option> 
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">"ЛЦ" прописано по адресу (адрес прописки)</label>
            <select name="" id="" className="form-select">
               <option>Прямая и обратная ссылка на БД "АДРЕС"</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Фактическое место жительства "ЛЦ" (адрес проживания)</label>
            <select name="" id="" className="form-select">
               <option>Прямая и обратная ссылка на БД "АДРЕС"</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Профессиональная деятельность "ЛЦ" (кем является "ЛЦ" по профессии)</label>
             <select name="" id="" className="form-select">
              <option selected>Откройте это меню выбора</option> 
               <option>01.001	Педагог (педагогическая деятельность в сфере дошкольного, начального общего, основного общего, среднего общего образования) (воспитатель, учитель)</option>
               <option>01.002	Педагог-психолог (психолог в сфере образования)</option>
               <option>01.003	Педагог дополнительного образования детей и взрослых</option>
               <option>01.005	Специалист в области воспитания</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Трудовая деятельность "ЛЦ" ("ЛЦ" работает в "ОР")</label>
            <select name="" id="" className="form-select">
               <option>Прямая и обратная ссылка на БД "ОРГАНИЗАЦИЯ"</option>
            </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">"ЛЦ" является ИСТОЧНИКОМ ИНФОРМАЦИИ о  (об) "ИН", "СБ", "УЯ" … (контакт Отдела мониторинга ГУП "ЦКБ")</label>
            <select name="" id="" className="form-select">
                <option>Прямые и обратные ссылки на БД "ИНЦИДЕНТ", БД "СОБЫТИЕ", БД "УЯЗВИМОСТЬ" …</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">"ЛЦ" квалифицировано как "НАРУШИТЕЛЬ"</label>
            <select name="" id="" className="form-select">
                <option>Прямая и обратная ссылка на БД "НАРУШИТЕЛЬ"</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">"ЛЦ" является (проходить по фактам)  фигурантом киберинцидента (расследования)</label>
            <select name="" id="" className="form-select">
                <option>Прямая и обратная ссылка на БД "ИНЦИДЕНТ"</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">"ЛЦ" имеет отношении к деятельности хакерских группировок (связь с "ХГ")</label>
            <select name="" id="" className="form-select">
                <option>Прямая и обратная ссылка на БД "ХАКЕРСКИЕ ГРУППИРОВКИ"</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">"ЛЦ" имеет связь (контакт) с иными членами ("фрилансерами") хакерских группировок</label>
            <select name="" id="" className="form-select">
                <option>Прямая и обратная ссылка на БД "КОНТАКТ-СВЯЗЬ ЛИЦА"</option>
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

export default Page_3_1;