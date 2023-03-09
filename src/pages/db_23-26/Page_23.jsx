import React from 'react';

const Page_23 = () => {
  ///page 23
  return (
    <>
      <div className='px-5'>
        <h4 className='text-center bg-mavzu py-2 mb-5'>К И Б Е Р И Н Ц И Д Е Н Т</h4>
        <form className="row">

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата коррекции информации</label>
            <input type="date" id="" className="form-select" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Информацию корректировал (а) (ФИО ответственного сотрудника ГУП "ЦКБ) </label>
             <select name="" id="" className="form-select">
            <option selected>Откройте это меню выбора</option>
               <option>ABDUG‘ANIYEV AZIZBEK ULUG‘BEK O‘G‘LI</option>
              <option>ABDULAZIZOV A’ZAM ABDUSAIDOVICH</option>
              <option>ABDULLAYEV AZAMAT YUSUF O‘G‘LI</option>
              <option>ABDULLAYEV IKROM ISKANDARBEKOVICH</option>
              <option>ABDUMANONOV BAXROM AKMAL O‘G‘LI</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Информацию вводил(а) (ФИО ответственного сотрудника ГУП "ЦКБ)  </label>
            <select name="" id="" className="form-select">
            <option selected>Откройте это меню выбора</option>
              <option>ABDUG‘ANIYEV AZIZBEK ULUG‘BEK O‘G‘LI</option>
              <option>ABDULAZIZOV A’ZAM ABDUSAIDOVICH</option>
              <option>ABDULLAYEV AZAMAT YUSUF O‘G‘LI</option>
              <option>ABDULLAYEV IKROM ISKANDARBEKOVICH</option>
              <option>ABDUMANONOV BAXROM AKMAL O‘G‘LI</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата ввода первичной информации</label>
            <input type="date" name="" id="" className='form-control' />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Источник информации об "ИН"</label>
            <select name="" id="" className="form-select ">
              <option>Прямая и обратная ссылка на БД "ИСТОЧНИК ИНФОРМАЦИИ"</option>
            </select>
          </div>      
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">   Тип выявленного компьтерного "ИН""</label>
            <select name="" id="" className="form-select">
            <option selected>Откройте это меню выбора</option>
              <option >Использование вредоносного программного обеспечения</option>
              <option >Использование методов социальной инженерии</option>
              <option >Эксплуатация уязвимостей информационной инфраструктуры</option>
              <option >Реализация спам рассылки</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Время выявления (возникновения) "ИН"</label>
            <input type="time" id="" className="form-select" />
          </div> 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата выявления (возникновения) "ИН"</label>
            <input type="date" id="" className="form-select" />
          </div> 
          
           <div className='my_hr'> </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">"ИН" произошел в ОРГАНИЗАЦИИ (Заявитель об киберинциденте)</label>
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
            <select name="" id="" className="form-select">
              <option selected>Прямая и обратная ссылка на БД "АДРЕС"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Причина обращений к сервису реагирования на инциденты (УСЛУГА ГУП "ЦКБ)</label>
            <select name="" id="" className="form-select">
              <option selected>True positives: Зашифрованные файлы</option>
              <option> True positives: Подозрительные файлы</option>
              <option> True positives: Подозрительная сетевая активность</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Общее описание "ИН" (что произошло? - как произошло? - почему произошло?)</label>
            <input type="date" id="" className="form-select" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Сведения о средстве / способе выявления "ИН"</label>
            <select name="" id="" className="form-select">
              <option >Серверы и базы данных.</option>
              <option >Контроллеры домена.</option>
              <option >Рабочие станции.</option>
              <option >Различные активные сетевые устройства.</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Уровень критичности "ИН"</label>
            <select name="" id="" className="form-select">
              <option>Низкий</option>
              <option>Средний</option>
              <option>Высокий</option>
              <option>Критичный</option>
              <option>Не установлена</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Классификация "ИН" по степени тяжести</label>
            <select name="" id="" className="form-select">
              <option>чрезвычайный: серьезное воздействие</option>
              <option>критический: среднее воздействие</option>
              <option>предупреждающий: низкое воздействие</option>
              <option>информационный: без какого-либо воздействия</option>
              <option>Не установлена</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Классификация "ИН" по степени серьезности</label>
            <select name="" id="" className="form-select">
              <option>небольшой (класс I).</option>
              <option>менее серьезный (класс II)</option>
              <option>серьезный (класс III)</option>
              <option>очень серьезный (класс IV)</option>
              <option>Не установлена</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label"> <b> Ограничительный маркер TLP (Traffic Light Protocol - уровень конфиденциальности информации) </b></label>
            <select name="" id="" className="form-select">
              <option>КРАСНЫЙ — крайне конфиденциальная информация, только для конечного получателя</option>
              <option>ЖЕЛТЫЙ — ограниченное распространение</option>
              <option>ЗЕЛЕНЫЙ — широкое распространение</option>
              <option>БЕЛЫЙ  — неограниченное распространение</option>
            </select>
          </div>
    
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Технические сведения о контролируемом ресурсе: IPv4-адрес атакованного ресурса</label>
            <input type="text" id="" className="form-control" />
          </div> 

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Технические сведения о контролируемом ресурсе: IPv6-адрес атакованного ресурса </label>
            <input type="text" id="" className="form-control" />
          </div>

           <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Технические сведения о контролируемом ресурсе: Доменное имя атакованного ресурса</label>
            <select name="" id="" className="form-select ">
              <option>hosting	1	AHOST ООО</option>
              <option>hosting - f	2	ARS-INFORM ООО ТАШКЕНТСКИЙ ФИЛИАЛ</option>
              <option>hosting	3	BILLUR COM ООО</option>
            </select>
          </div>
           
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Технические сведения о вредоносной системе: URI-адрес вредоносной системы</label>
            <select name="" id="" className="form-select ">
              <option>www.academy.uz</option>
              <option>www.agmk.uz</option>
              <option>www.agro.uz</option>
              <option>www.agrobank.uz</option>
            </select>
          </div>
               
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Технические сведения о вредоносной системе: Email-адрес вредоносного объекта</label>
            <select name="" id="" className="form-select ">
              <option>academy@academy.uz</option>
              <option>admin@tapc.uz</option>
              <option>ask@dtm.uz</option>
              <option>bcc@buxoro.uz</option>
            </select>
          </div>      
           
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Технические сведения о вредоносной системе: Описание класса используемых уязвимостей</label>
            <select name="" id="" className="form-select ">
              <option>Уязвимость архитектуры</option>
              <option>Уязвимость кода</option>
              <option>Уязвимость многофакторная</option>
              <option>Не установлена</option>
            </select>
          </div>
                 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Технические сведения о вредоносной системе: Хеш-сумма вредоносного модуля</label>
            <input type="text" className='form-control' />
          </div>
           
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">"ИН" представляет УГРОЗУ БЕЗОПАСНОСТИ ИНФОРМАЦИИ</label>
            <select name="" id="" className="form-select ">
              <option>Прямая и обратная ссылка на БД "УГРОЗА"</option>
            </select>
          </div>
               
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Операционная метрика: Как обнаружили "ИН"</label>
            <select name="" id="" className="form-select ">
              <option>True positives: Зашифрованные файлы</option>
              <option>True positives: Подозрительные файлы</option>
              <option>True positives: Подозрительная сетевая активность</option>
            </select>
          </div>      
           
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Операционная метрика: Инцидент обнаружен ДО ИЛИ ПОСЛЕ последствий кибератаки</label>
            <select name="" id="" className="form-select ">
              <option>До обнаружения последствий атаки</option>
              <option>После обнаружения последствий атаки</option>
              <option>нет информации</option>
            </select>
          </div>
                 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Операционная метрика: Продолжительность атаки </label>
            <input type="text" className='form-control' />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Объект (ы)  воздействия "ИН"</label>
            <select name="" id="" className="form-select ">
              <option>Автоматизированное рабочее место</option>
              <option>Сервер</option>
              <option>Периферийное оборудование</option>
              <option>Устройство хранения данных</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Тип компонентов воздействия "ИН"</label>
            <select name="" id="" className="form-select ">
              <option>Программное обеспечение</option>
              <option>Программно-аппаратные средства</option>
              <option>Сетевые компоненты</option>
              <option>Пользователи</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Группа компонентов воздействия "ИН"</label>
            <select name="" id="" className="form-select ">
              <option>Микропрограммное обеспечение</option>
              <option>Системное программное обеспечение (ПО)</option>
              <option>Сервисное ПО</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Наименование компонента воздействия "ИН"</label>
            <select name="" id="" className="form-select ">
              <option>Прошивка (встроенная микропрограмма)</option>
              <option>UEFI/BIOS</option>
              <option>Операционная система</option>
              <option>Мобильная операционная система</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">"ИН" квалифицирован как  кибератака / событие ИБ </label>
            <input type="text" id="" className="form-control" />
          </div>
          
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Выявлена связь "ИН" с хакерской группировкой / нарушителем / лицом (Субъекты "ИН")</label>
            <select name="" id="" className="form-select ">
              <option>Прямые и обратные ссылка на БД "ХАКЕРСКИЕ ГРУППИРОВКИ", БД "НАРУШИТЕЛЬ", БД "ЛИЦО"</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Установленная мотивация (побудительная причина кибератаки)</label>
            <select name="" id="" className="form-select ">
              <option>Вымогательство денежных средств</option>
              <option>Кибершпионаж, получение информации, которая может предоставить политические, экономические и военные преимущества</option>
              <option>Кража денежных средств</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Начальный вектор атаки: КАК атакующие проникли внутрь организации - ТЕХНИКА нарушителей (МЕТОД)</label>
            <select name="" id="" className="form-select ">
              <option>T1.1	Сбор информации из публичных источников: официальный сайт (сайты) организации, СМИ, социальные сети, фотобанки, сайты поставщиков и вендоров, материалы конференций	T1593
		T1594
		T1596
		T1591</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Использованная ТАКТИКА нарушителей</label>
            <select name="" id="" className="form-select ">
              <option>Тактика атаки на Корпоративную телекомминикационну сеть	Разведка	Противник пытается собрать информацию, которую он может использовать для планирования будущих операций.</option>
            </select>
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Выявленная типовая угроза: стандартный вектор атаки (инструменты, использованные атакующими)</label>
            <select name="" id="" className="form-select ">
              <option>3Rat Client</option>
              <option>9002 RAT</option>
              <option>AdobeARM</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Атакующие использовали эксплойты (CVE) / дефекты безопасности (CWE) /  известные эксплуатируемые "УЯ" (KEV)  </label>
            <select name="" id="" className="form-select ">
              <option>Прямая и обратная ссылка на БД "УЯЗВИМОСТЬ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Подразделение "ЦК / "ПБ" / "ЛЦ", обрабатывающее "ИН"</label>
            <select name="" id="" className="form-select ">
              <option>Прямые и обратные ссылки на БД "ЦК"", БД "ПБ", БД "ЛЦ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата завершения (предотвращения) "ИН"</label>
            <input type="date" id="" className="form-select" />
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Время завершения (предотвращения) "ИН"</label>
            <input type="time" id="" className="form-select" />
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Операционная метрика: Продолжительность реагирования на атаку</label>
            <input type="datetime-local" id="" className="form-select" />
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">География реагирования на инцидент </label>
            <select name="" id="" className="form-select ">
              <option>Австралия и Новая Зеландия</option>
              <option>Восточная Азия</option>
              <option>Восточная Африка</option>
              <option>Восточная Европа</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Текущий статус (состояние) "ИН" </label>
            <select name="" id="" className="form-select ">
              <option>Новый инцидент (событие)</option>
              <option>Находится в проверке</option>
              <option>Завершен</option>
              <option>Не завершен</option>
              <option>Данные отсутствуют</option>
            </select>
          </div>
 
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Описание нарушения функционирования объекта воздействия (ИС, КИИ и др)</label>
            <input type="text" id="" className="form-select" />
          </div>
          
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Установленные последствия "ИН" - 1-го порядка: состояние конфиденциальности/целостности /доступности </label>
            <select name="" id="" className="form-select ">
              <option>Полное нарушение конфиденциальности </option>
              <option>Частичное нарушение конфиденциальности  </option>
              <option>Нарушение конфиденциальности отсутствует</option>
              <option>Полное нарушение целостности</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Установленные последствия "ИН" - 2-го порядка: Факторы реализации ущерба </label>
            <select name="" id="" className="form-select ">
              <option>Возникновение ущерба государственному бюджету Республики Узбекистан.</option>
              <option>Вредные воздействия на окружающую среду.</option>
              <option>Дискредитация работников.</option>
              <option>Доступ к системам и сетям с целью незаконного использования вычислительных мощностей.</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Установленные последствия "ИН" - 3-го порядка: Субъект (жертва) УЩЕРБА </label>
            <select name="" id="" className="form-select ">
              <option>Ущерб физическому лицу (ущерб личности)</option>
              <option>Риски юридическому лицу, индивидуальному предпринимателю, связанный с хозяйственной деятельностью (ущерб обществу)</option>
              <option>Ущерб государству в области обеспечения обороны страны, безопасности государства и правопорядка, а также в социальной, экономической, политической, экологической сферах деятельности (ущерб государству)</option>
              <option>Данные отсутствуют </option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">РЕЗУЛЬТАТЫ РЕАГИРОВАНИЯ НА ИН" (ПРИНЯТЫЕ МЕРЫ) </label>
            <select name="" id="" className="form-select ">
              <option>Прямая и обратная ссылка на БД "РЕАГИРОВАНИЕ - ПРИНЯТЫЕ МЕРЫ"</option>
            </select>
          </div>

          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дополнительная информация</label>
            <input type="text" id="" className="form-control" />
          </div>
       
       
        
          
         
        </form>
      </div>
    </>
  );
};

export default Page_23;




