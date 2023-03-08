import React from 'react';

const Page_24 = () => {
  ///page 24
  return (
    <>
      <div className='px-5'>
        <h4 className='text-center bg-info py-2 mb-5'>С О Б Ы Т И Е  ИНФОРМАЦИОННОЙ БЕЗОПАСНОСТИ</h4>
        <form className="row">
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">"СО" зафиксировано в ОРГАНИЗАЦИИ (данные о "СО" поступили из "ОР" / "ЛЦ")</label>
            <select name="" id="" className="form-select">
              <option>Прямая и обратная ссылка на БД "ОРГАНИЗАЦИЯ", БД "ЛИЦО"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Подразделение "ЦК / "ПБ" / "ЛЦ", выявившее "ИН"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямые и обратные ссылки на БД "ЦК"", БД "ПБ", БД "ЛЦ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Место происшествия (фиксации) "ИН"</label>
            <input type="text" id="" className="form-control" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Сумма оплаты за услугу по договору</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "АДРЕС"</option>
            </select>
          </div>


          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата фиксации (регистрации) "СО"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая  ссылки на СБ "Сумма"</option>
            </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата начала предоставления услуги "Сертификации ПО"</label>
            <input type="date" id="" className="form-select" />
          </div>

      
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Время фиксации (регистрации) "СО"</label>
            <select name="" id="" className="form-select">
              <option selected>Цифровая (формат времени) чч:мм:сс</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">"СО" относится к ГРУППЕ событий ИБ</label>
            <select name="" id="" className="form-select">
              <option selected>Информативные</option>
              <option selected>Не критичные </option>
              <option selected>Критичные </option>
              
           </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Классификация уровеня риска (критичности) "СО"</label>
            <select name="" id="" className="form-select">
              <option selected>критические"</option>
              <option selected>предупреждени</option>
              <option selected>подробностии</option>
              <option selected>ошибки</option>
              <option selected>сведения</option>
              
            </select>
          </div>

<div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Вероятная, прогнозируемая реализация "СО" (по базовому Типу "СО")</label>
            <select name="" id="" className="form-select">
              <option selected>Полное нарушение конфиденциальности</option>
              <option selected>Частичное нарушение конфиденциальности</option>
              <option selected>Нарушение конфиденциальности отсутствует</option>
              <option selected>Полное нарушение целостности</option>
              <option selected>Частичное нарушение целостности</option>
              <option selected>Нарушение целостности отсутствует</option>
              <option selected>Полное нарушение доступности</option>
              <option selected>Частичное нарушение доступности</option>
              <option selected>Нарушение доступности отсутствует</option>
              <option selected>Данные отсутствуют</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Описание идентифицированного "СО"</label>
            <select name="" id=""><option selected>вход в систему (успешный или нет)</option>
              <option selected>выход из системы</option>
              <option selected>обращение к удаленной системе</option>
              <option selected>операции с файлами (открыть, закрыть, переименовать, удалить</option></select>
          </div>
          
             
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Общее описание состава и содержания зарегистрированного "СО" </label>
            <input type="text" id="" className="form-control" />
          </div>
        
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Сведения о средстве / способе регистрации "СО" (источники "СО")</label>
            <select name="" id="" className="form-select ">
              <option>Серверы и базы данных.)</option>
              <option>Контроллеры домена.</option>
              <option>Рабочие станции.</option>
              <option>Различные активные сетевые устройства</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Адрес хранения записей о выявленных "СО" и записей SYSLOG, послуживших основанием для регистрации"СО")</label>
            <input type="text" id="" className="form-control" />
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Применение СЗИ для защиты информации о "СО"</label>
            <input type="text" id="" className="form-control" />
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Текущий статус (состояние) "СО"</label>
            <select name="" id="" className="form-select ">
              <option>Новый инцидент (событие)</option>
              <option>Находится в проверке.</option>
              <option>Завершен</option>
              <option>Не завершен</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Текущий статус (состояние) "СО"</label>
            <select name="" id="" className="form-select ">
              <option>Время  (Дни/Часы/Минуты) (событие)</option>
              <select>
             </div>

<div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Наличие причинно-следственной связи с другими "СО", "ИН", "УЯ", "УГ": ("УГ"->"СО"->"ИН"->Реализованная угроза)</label>
            <select name="" id="" className="form-select ">
              <option>Прямые и обратные ссылки на БД "ИН", БД "СО", БД "УЯ", БД "УГ"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Подразделение "ЦК / "ПБ" / "ЛЦ", обрабатывающее "СО"</label>
            <select name="" id="" className="form-select ">
              <option>Прямые и обратные ссылки на БД "ЦК"", БД "ПБ", БД "ЛЦ"</option>
            </select>
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Результаты ПРИНЯТЫХ МЕР по "СО"</label>
            <select name="" id="" className="form-select ">
              <option>Прямая и обратная ссылка на БД "РЕАГИРОВАНИЕ - ПРИНЯТЫЕ МЕРЫ"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дополнительная информация  </label>
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

export default Page_24;