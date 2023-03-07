import React from 'react';

const Page_13 = () => {
  ///page 13
  return (
    <>
      <div className='px-5'>
        <h4 className='text-center bg-info py-2 mb-5'>ЭКСПЕРТИЗА ТЕХНИЧЕСКИХ ЗАДАНИЙ</h4>
        <form className="row">
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Организация предоставленная услуга "Экспертиза ТЗ"</label>
            <select name="" id="" className="form-select">
              <option>Прямая и обратная ссылка на БД "Организация"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Основание для осуществления услуги "Экспертиза ТЗ"</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Основание для оказания услуги ГУП "ЦКБ"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Номер подписанного договора, запроса и т.д.  на проведение услуги "Экспертиза ТЗ"</label>
            <input type="text" id="" className="form-control" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата подписанного договора на проведение услуги "Экспертиза ТЗ" (поступивщего запроса)</label>
            <input type="date" name="" id="" className='form-control' />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Сумма оплаты за услугу по договору</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая  и обратная ссылки на СБ "Сумма"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">ПИнформация о Техническом задании</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Описание ТЗ"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Тип проекта</label>
            <select name="" id="" className="form-select">
              <option selected>Прямая ссылка на СБ "Тип проекта"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Назначение Технического задания</label>
            <select name="" id="" className="form-select">
              <option selected> Прямая ссылка на СБ "Назначение технического задания"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Тип комплекса информационной системы</label>
            <select name="" id="" className="form-select border-danger">
              <option>Прямая ссылка на СБ "Тип комплекса информационной системы"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Тип подсистем информационной системы</label>
            <select name="" id="" className="form-select border-danger">
              <option>Прямая ссылка на СБ "Тип подсистем информационной системы"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Услуга "Экспертиза ТЗ" осуществлена подразделением ГУП "ЦКБ"</label>
            <select name="" id="" className="form-select">
              <option>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
            </select>
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Сотрудники Центра выполнившие экспертизу</label>
            <select name="" id="" className="form-select">
            <option>Прямая и обратная ссылка на БД "Подразделение ГУП "Центр кибербезопасности"</option>
            </select>

          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата начала предоставления услуги "Экспертиза ТЗ"</label>
            <input type="date" id="" className="form-select" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Стадия реализации услуги (на какой стадии находится осуществление услуги "Экспертиза ТЗ")  </label>
            <input type="text" id="" className="form-control" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дата окончания предоставления услуги "Экспертиза ТЗ"</label>
            <input type="date" id="" className="form-select" />
          </div>
          <div className="mb-3 col-6 col-lg-4">
            <label className="form-label">Дополнительная информация</label>
            <input type="text" id="" className="form-control" />
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

export default Page_13;




