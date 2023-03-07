import React from 'react';

type Props = {};

const Page_1_2 = (props: Props) => {
  return (
    <>
     <div className='px-5'>
      <h4 className='text-center bg-info py-2 mb-5'>ИНФОРМАЦИОННАЯ ИНФРАСТРУКТУРА ОБЪЕКТОВ ИНФОРМАТИЗАЦИИ</h4>
     
          <form className="row">
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">"ОИ" является информационно-коммуникационной инфраструктурой "ОР"</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая и обратная ссылка на БД "ОРГАНИЗАЦИЯ"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Количество функционирующих серверов на "ОИ"</label>
              <input type="number" name="" id=""  className='form-control'/>
            </div>
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Количество функционирующих рабочих станций на "ОИ"</label>
              <input type="number" name="" id=""  className='form-control'/>
            </div>
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наличие локально-вычислительной сети (включая беспроводные) на "ОИ"</label>
                <select name="" id="" className="form-select">
                  <option selected>да</option>
                  <option>нет</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наличие корпоративной сети (включая беспроводные) на "ОИ"</label>
                <select name="" id="" className="form-select">
                  <option selected>да</option>
                  <option>нет</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Операционная система, эксплуатируемая на "ОИ" (Платформа ОС "ОИ", в т.ч. не сертифицированная, не лицензированная) </label>
                <select name="" id="" className="form-select">
                  <option selected>Откройте это меню выбора</option>
                  <option>Windows NT 3.1 (1993)</option>
                  <option>Windows NT 3.5 (1994)</option>
                  <option>Windows NT 3.51 (1995)</option>
                  <option>Windows NT 4.0 (1996)</option>
                  <option>Windows 2000 — Windows NT 5.0 (2000)</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Информационные системы (базы и банки данных), функционирующие на "ОИ" (в том числе не сертифицированные)</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая ссылка на СБ "Информационные системы и базы данных организаций"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наличие на "ОИ" аппаратных средств защиты информации, в т.ч. СКЗИ (в т.ч. не сертифицированные) </label>
                <select name="" id="" className="form-select">
                  <option selected>Откройте это меню выбора</option>
                  <option>Аппаратные межсетевые экраны</option>
                  <option>Генераторы белого и радио шума для защиты от утечки информации по каналам ПЭМИН (побочные электромагнитные излучения и наводки)</option>
                  <option>Аппаратные регистры паролей</option>
                  <option>Аппаратные модули доверенной загрузки (Смарт-карты, USB-идентификатор, Электронный замок)</option>
                  <option>Пассивные средства защиты речевой информации</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наличие на "ОИ" аппаратно-программных средств защиты информации, в т.ч. СКЗИ (в т.ч. не сертифицированные)</label>
                <select name="" id="" className="form-select">
                  <option selected>Откройте это меню выбора</option>
                  <option>Системы идентификации и аутентификации пользователей</option>
                  <option>Системы шифрования дисковых данных</option>
                  <option>Системы шифрования данных, передаваемых по сетям</option>
                  <option>Системы аутентификации электронных данных</option>
                  <option>Средства управления ключевой информацией</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наличие на "ОИ" программных средств защиты информации, в т.ч. СКЗИ (в т.ч. не сертифицированных)</label>
                <select name="" id="" className="form-select">
                  <option selected>да</option>
                  <option>360 AntiVirus 5.0.0.5104</option>
                  <option>360 Document Protector 1.0.0.1202</option>
                  <option>360 Total Security Essential 8.8.0.1119</option>
                  <option>360 Total Security для Mac 1.2.6</option>
                  <option>360 Total Security 10.8.0.1514</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наличие серверного помещения на "ОИ"</label>
                <select name="" id="" className="form-select">
                  <option selected>да</option>
                  <option>нет</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наличие физической охраны "ОИ" и её периметра</label>
                <select name="" id="" className="form-select">
                  <option selected>да</option>
                  <option>нет</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Наличие штатного (в т.ч. аутсорсного) подразделения (сотрудника), отвественного за обеспечение ИБ на "ОИ"</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямые и обратные ссылки на БД "ПОДРАЗДЕЛЕНИЕ (СОТРУДНИК) ИБ ОРГАНИЗАЦИИ", БД "ЛИЦО"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">"ОИ" имеет подключение к АИСМ состояния ИБ ГУП "ЦЕНТР КИБЕРБЕЗОПАСНОСТИ"</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая и обратная ссылка на БД "АИСМ ИБ ГУП "ЦЕНТР КИБЕРБЕЗОПАСНОСТИ""</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Дата подключения "ОИ" к АИСМ состояния ИБ ГУП "ЦЕНТР КИБЕРБЕЗОПАСНОСТИ" (вводится при наличии подключения)</label>
              <input type="date" name="" id=""  className='form-control'/>
            </div>
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Дополнительная информация</label>
                <input type="text" id="" className="form-select" />
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Источник информации об "ОИ"</label>
                <select name="" id="" className="form-select">
                  <option selected>Прямая и обратная ссылка на БД "ИСТОЧНИК ИНФОРМАЦИИ"</option>
                </select>
            </div> 
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Дата ввода первичной информации</label>
                <input type="date" id="" className="form-select" />
            </div>
            <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label">Информацию вводил(а) (ФИО ответственного сотрудника ГУП "ЦКБ) </label>
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

export default Page_1_2;