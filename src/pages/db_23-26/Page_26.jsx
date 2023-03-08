import React from 'react';

const Page_26 = () => {
  ///page 26
  return (
    <>
      <div className='px-5'>
        <h4 className='text-center bg-info py-2 mb-5'>СЕРТИФИКАЦИЯ ИКТ (ПО)</h4>
        <form className="row">
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">"УГ" выявлена в ОРГАНИЗАЦИИ (данные о "УГ" поступили из "ОР" / "ЛЦ")</label>
            <select name="" id="" className="form-select">
              <option>Прямая и обратная ссылка на БД "ОРГАНИЗАЦИЯ", БД "ЛИЦО"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Подразделение "ЦК / "ПБ" / "ЛЦ", выявившее "УГ"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямые и обратные ссылки на БД "ЦК"", БД "ПБ", БД "ЛЦ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Место выявления "УГ"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "АДРЕС"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Дата выявления "УГ" </label>
            <input type="date" name="" id="" className='form-control' />
          </div>


          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Время выявления "УГ"</label>
            <input type="time" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Источник выявленной угрозы (характеристика и потенциал нарушителя) </label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Источник угрозы"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Описание "УГ" (каким образом выявлена "УГ", её характеристика: физическая, техническая и т.д.) </label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Идентификация "УГ" по способу реализации (наименование "УГ" по коду)</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Идентификация угрозы по способу её реализации"</option>
            </select>
          </div>


          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Аппаратная и/или программная среда (объект) воздействия "УГ" </label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Аппаратная и программная среда (объект) воздействия угроз"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Точный тип (вид) объекта воздействия "УГ" (на что конкретно влияет "УГ")</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Объект воздействия угрозы"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Оценка возможных способов реализации "УГ"</label>
            <select name="" id="" className="form-select ">
              <option>Прямая ссылка на СБ "Способы реализации угрозы"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">В чём заключается выявленная "УГ" (угроза - риск реализации: описание по коду)  </label>
            <select name="" id="" className="form-select ">
              <option> Прямая ссылка на СБ "Угроза заключается - Суть угрозы"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">  Описание степень вероятности реализации алгоритма: выявленный источник "УГ"+ "УЯ" актива + способ реализации "УГ"+ объект воздействия + вредоносное воздействие и его последствия.   </label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Потенциальные последствия реализации идентифицированной "УГ"</label>
            <select name="" id="" className="form-select ">
              <option> Прямая ссылка на СБ "Последствия реализации угрозы"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Оценка последствий реализации "УГ":  риск нарушения конфиденциальности/целостности /доступности </label>
            <select name="" id="" className="form-select ">
              <option> Прямая ссылка на СБ "Последствия инцидента"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Наличие причинно-следственной связи с другими "УГ", "УЯ", СО", "ИН" (в т.ч. факты реализации "УГ")  </label>
            <select name="" id="" className="form-select ">
              <option>Прямые и обратные ссылки на БД "ИН", БД "СО", БД "УЯ", БД "УГ"</option>
            </select>
          </div>

          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Подразделение "ЦК / "ПБ" / "ЛЦ", обрабатывающее "УГ" </label>
            <select name="" id="" className="form-select ">
              <option>Прямые и обратные ссылки на БД "ЦК"", БД "ПБ", БД "ЛЦ"</option>
            </select>
          </div>

          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Подтверждено ли наличие "УГ"? (статус) ДА / НЕТ (отметить нужное)  </label>
            <select name="" id="" className="form-select ">
              <option>Прямая ссылка на СБ "Выбор ДА и НЕТ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Дата подтверждения "УГ" </label>
            <input type="date" id="" className="form-select" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">   Время подтверждения "УГ" </label>
            <input type="time" id="" className="form-control" />
          </div>

          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Отметка об устранении (разрешении) "УГ" ДА / НЕТ (отметить нужное)   </label>
            <select name="" id="" className="form-select ">
              <option>Прямая ссылка на СБ "Выбор ДА и НЕТ"</option>
            </select>
          </div>

          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Результаты ПРИНЯТЫХ МЕР по "УГ" (Описание процесса устранения "УГ") </label>
            <select name="" id="" className="form-select ">
              <option>Прямая и обратная ссылка на БД "РЕАГИРОВАНИЕ - ПРИНЯТЫЕ МЕРЫ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> Дополнительная информация </label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Источник информации об "СО" </label>
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
         
        </form>
      </div>
    </>
  );
};

export default Page_26;




