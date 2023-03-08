import React from 'react';

const Page_25 = () => {
  ///page 25
  return (
    <>
      <div className='px-5'>
        <h4 className='text-center bg-info py-2 mb-5'>У Я З В И М О С Т Ь  ИНФОРМАЦИОННОЙ БЕЗОПАСНОСТИ</h4>
        <form className="row">
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">"УЯ" выявлена в ОРГАНИЗАЦИИ (данные о "УЯ" поступили из "ОР" / "ЛЦ")</label>
            <select name="" id="" className="form-select">
              <option>Прямая и обратная ссылка на БД "ОРГАНИЗАЦИЯ", БД "ЛИЦО"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Подразделение "ЦК / "ПБ" / "ЛЦ", выявившее "УЯ"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямые и обратные ссылки на БД "ЦК"", БД "ПБ", БД "ЛЦ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Место выявления "УЯ"</label>
            <select name="" id="" className="form-select">
              <option selected>ППрямая и обратная ссылка на БД "АДРЕС"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата выявления "УЯ"</label>
            <input type="date" name="" id="" className='form-control' />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Время выявления "УЯ"</label>
            <input type="time" name="" id="" className='form-control' />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Описание "УЯ" (каким образом была замечена "УЯ", её характеристика: физическая, техническая и т.д.)</label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Уровень опасности "УЯ" </label>
            <select name="" id="" className="form-select">
              <option>Низкий</option>
              <option>Средний</option>
              <option>Высокий</option>
              <option>Критичный</option>
              <option>Не установлена</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">ID выявленной "УЯ": Идентификатор "УЯ" (указать по БД ФСТЭК РФ по https://bdu.fstec.ru/vul) </label>
            <select name="" id="" className="form-select">
              <option>BDU:2014-00001</option>
              <option>BDU:2014-00002</option>
              <option>BDU:2014-00003</option>
              <option>BDU:2014-00004</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">ID выявленной "УЯ": Эксплойты (указать код уязвимости (CVE) по https://cve.mitre.org </label>
            <select name="" id="" className="form-select">
              <option>CVE-2011-4859</option>
              <option>CVE-2013-5946, OSVDB ID:100840, Bugtraq ID:64172, ISS X-Force ID:89542, Exploit Database ID:30061</option>
              <option>CVE-2012-3556, OSVDB ID:82952, Secunia Advisory ID:49533</option>
              <option>CVE-2012-1944, OSVDB ID:82672, Secunia Advisory ID:49366</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">ID выявленной "УЯ": Дефекты безопасности: указать код ошибки (CWE) по https://cwe.mitre.org</label>
            <select name="" id="" className="form-select">
              <option>CWE-1</option>
              <option>CWE-1021</option>
              <option>CWE-1050</option>
              <option>CWE-1103</option>
            </select>
          </div>

Ахиллес, [3/8/2023 5:02 PM]
<div className="mb-3 col-6 col-lg-4">
            <label className="form-label">ID выявленной "УЯ": Известные уязвимости (указать код (KEV) по https://www.cisa.gov</label>
            <select name="" id="" className="form-select">
              <option>CVE-2021-27104,"Accellion","FTA","Accellion FTA OS Command Injection Vulnerability","2021-11-03","Accellion FTA 9_12_370 and earlier is affected by OS command execution via a crafted POST request to various admin endpoints.","Apply updates per vendor</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Класс выявленной "УЯ"</label>
            <select name="" id="" className="form-select">
              <option>Уязвимость кода</option>
              <option>Уязвимость архитектуры</option>
              <option>Уязвимость многофакторная</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Выявленные способы эксплуатации "УЯ"</label>
            <select name="" id="" className="form-select">
              <option>Несанкционированный сбор информации</option>
              <option>Исчерпание ресурсов</option>
              <option>Инъекция</option>
              <option>Анализ целевого объекта</option>
              <option>Подмена при взаимодействии</option>
              <option>Злоупотребление функционалом</option>
              <option>Нарущение авторизации</option>
              <option>Нарущение аутентификации</option>
            </select>
          </div>


          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Какие ИТ/сетевые компоненты/активы причастны</label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Компоненты/активы, которые могут быть затронуты при использовании уязвимости</label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Потенциальное неблагоприятное воздействие на бизнес-деятельность при использовании уязвимости</label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Основные факторы, послуживщие причиной возникновения "УЯ"</label>
            <select name="" id="" className="form-select">
              <option>несовершенство программного обеспечения, аппаратной платформы</option>
              <option>разные характеристики строения автоматизированных систем в информационном потоке</option>
              <option>часть процессов функционирования систем является неполноценной</option>
              <option>неточность протоколов обмена информацией и интерфейса</option>
              <option>сложные условия эксплуатации и расположения информации</option>
              <option>данные отсутствуют</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Наличие причинно-следственной связи с другими "УЯ", "СО", "ИН", "УГ" (факты использования "УЯ")</label>
            <select name="" id="" className="form-select">
              <option selected>Прямые и обратные ссылки на БД "ИН", БД "СО", БД "УЯ", БД "УГ"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Подразделение "ЦК / "ПБ" / "ЛЦ", обрабатывающее "СО"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямые и обратные ссылки на БД "ЦК"", БД "ПБ", БД "ЛЦ"</option>
            </select>
          </div>

Ахиллес, [3/8/2023 5:02 PM]
<div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Подтверждена ли уязвимость? (статус) ДА / НЕТ (отметить нужное)</label>
            <select name="" id="" className="form-select">
              <option>Уязвимость кода</option>
              <option>Уязвимость архитектуры</option>
              <option>Уязвимость многофакторная</option>
            </select>
          </div>


          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата подтверждения "УЯ"</label>
            <input type="date" name="" id="" className='form-control' />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Время подтверждения "УЯ"</label>
            <input type="time" name="" id="" className='form-control' />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Разрешение "УЯ" ДА / НЕТ (отметить нужное)</label>
            <select name="" id="" className="form-select">
              <option>Уязвимость кода</option>
              <option>Уязвимость архитектуры</option>
              <option>Уязвимость многофакторная</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Результаты ПРИНЯТЫХ МЕР по "УЯ" (Описание процесса устранения "УЯ")</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "РЕАГИРОВАНИЕ - ПРИНЯТЫЕ МЕРЫ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дополнительная информация</label>
            <input type="text" id="" className="form-control" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Источник информации об "СО"</label>
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
        </form>
      </div>
    </>
  );
};

export default Page_25;