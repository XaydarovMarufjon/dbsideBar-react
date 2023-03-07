import React from 'react';

type Props = {};

const Page_2_2 = (props: Props) => {
  return (
    <>
     <div className='px-5'>
    <h4 className='text-center  bg-info py-2 mb-5'>НАРУШИТЕЛЬ</h4>
    <form className="row">
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Тип нарушителя</label>
              <select name="" id="" className="form-select ">
                 <option >Прямая ссылка на СБ "Типы нарушителей"</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
          <label className="form-label">Группа нарушителя</label>
              <select name="" id="" className="form-select">
               <option>Прямая ссылка на СБ "Группы нарушителей" (внутренние, внешние)</option>
              </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
            <label className="form-label">Уровни возможностей нарушителя</label>
               <select name="" id="" className="form-select">
                <option>Прямая ссылка на СБ "Уровни возможностей нарушителей"</option>
               </select>
          </div>
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Нарушителем является конкретное Лицо и/или Хакерская группировка (если идентифицирован, после атрибуции)</label>
              <select name="" id="" className="form-select ">
                 <option >Прямая и обратная ссылка на БД "ЛИЦО", БД "Хакерские группировки"</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Тактики, используемые "НР" (согласно матрице MITRE ATT&CK  https://attack.mitre.org/# ) </label>
              <select name="" id="" className="form-select ">
                 <option >Прямая ссылка на СБ "Мотивация деятельности "НР""</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
                 <label className="form-label">Техники, используемые "НР" (согласно матрице MITRE ATT&CK)  </label>
              <select name="" id="" className="form-select ">
                            <option >Windows NT 3.1 (1993)</option>
                            <option >Windows NT 3.5 (1994)</option>
                            <option >Windows NT 3.51 (1995)</option>
                            <option >Windows NT 4.0 (1996)</option>
              </select>
          </div> 
          <div className="mb-3 col-md-6 col-lg-4">
              <label className="form-label">Дополнительная информация </label>
              <input type="text" id="" className="form-control" />
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

export default Page_2_2;