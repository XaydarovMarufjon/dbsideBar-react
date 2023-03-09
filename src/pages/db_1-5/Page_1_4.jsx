import React from 'react';

const Page_1_4 = () => {
  return (
    <>
    <div className='px-5'>
      <h4 className='text-center bg-mavzu py-2 mb-5'>ПОДРАЗДЕЛЕНИЕ ГУП "ЦЕНТР КИБЕРБЕЗОПАСНОСТИ"</h4>
     
      <form className="row">
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наименование Департамента / Самостоятельного отдела "ЦК"</label>
                <select name="" id="" className="form-select">
                   <option selected>Откройте это меню выбора</option>
                   <option>Бухгалтерия</option>
                   <option>Юридик бюро</option>
                   <option>Ахборотлаштириш бўлими</option>
                   <option>Назорат ва ҳужжатлар айланиши бўлими</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наименование Входящего отдела Департамента "ЦК"</label>
                <select name="" id="" className="form-select">
                   <option selected>Откройте это меню выбора</option>
                   <option>Аппарат воситаларининг синов лабораторияси</option>
                   <option>Дастурий воситаларнинг синов лабораторияси</option>
                   <option>Чора кўриш бўлими</option>
                   <option>Текшириш бўлими</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Ф.И.О. курирующего заместителя директора "ЦК"</label>
              <select name="" id="" className="form-select">
                 <option>ABDUG‘ANIYEV AZIZBEK ULUG‘BEK O‘G‘LI</option>
                 <option>ABDULAZIZOV A’ZAM ABDUSAIDOVICH</option>
                 <option>ABDULLAYEV AZAMAT YUSUF O‘G‘LI</option>
                 <option>ABDULLAYEV IKROM ISKANDARBEKOVICH</option>
                 <option>ABDUMANONOV BAXROM AKMAL O‘G‘LI</option>
                </select>
            </div>
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Ф.И.О. руководителя производственного подразделения (Департамента, отдела, вх.отдела) "ЦК"</label>
               <select name="" id="" className="form-select">
                 <option>ABDUG‘ANIYEV AZIZBEK ULUG‘BEK O‘G‘LI</option>
                 <option>ABDULAZIZOV A’ZAM ABDUSAIDOVICH</option>
                 <option>ABDULLAYEV AZAMAT YUSUF O‘G‘LI</option>
                 <option>ABDULLAYEV IKROM ISKANDARBEKOVICH</option>
                 <option>ABDUMANONOV BAXROM AKMAL O‘G‘LI</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Ф.И.О. сотрудника (исполнителя) производственного подразделения "ЦК"</label>
                <select name="" id="" className="form-select">
                 <option>ABDUG‘ANIYEV AZIZBEK ULUG‘BEK O‘G‘LI</option>
                 <option>ABDULAZIZOV A’ZAM ABDUSAIDOVICH</option>
                 <option>ABDULLAYEV AZAMAT YUSUF O‘G‘LI</option>
                 <option>ABDULLAYEV IKROM ISKANDARBEKOVICH</option>
                 <option>ABDUMANONOV BAXROM AKMAL O‘G‘LI</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Занимаемая должность сотрудника (исполнителя)  "ЦК"</label>
                <select name="" id="" className="form-select">
                  <option>Директор</option>
                  <option>Директорнинг биринчи ўринбосари</option>
                  <option>Директор ўринбосари</option>
                  <option>Департамент бошлиғи</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Контактные данные сотрудника (исполнителя) "ЦК" (телефонные номера: внутренняя, ГТС, мобильная) </label>
              <input type="text" id="" className="form-control" />
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Дополнительная информация</label>
                <input type="text" id="" className="form-control" />
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Подразделением "ЦК" зафикцированы:  инцидент / событие / уязвимость / угроза для ИБ / нарушитель / хакерская группировка</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямые и обратные ссылки на БД "ИН", БД "СО", БД "УЯ", БД "УГ", БД "НР", БД "ХГ"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Подразделением "ЦК" проведены (осущ-ны):  расследование/экспертиза/аудит/аттестация/сертификация/тех.задание</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямые и обратные ссылки на БД "Расследование", БД "Экспертиза", БД "Аудит", БД "Аттестация", БД "Сертификация", БД "Техническое задание"</option>
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

export default Page_1_4;