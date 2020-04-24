import React from 'react';
import './style.css';
import img1 from '../../../assets/img/olive-oil-pngrepo-com.png';
import img2 from '../../../assets/img/herbs-leaves-for-natural-spa-treatment-pngrepo-com.png';
import img3 from '../../../assets/img/cocktail-drink-with-stirrer-pngrepo-com.png';
import img4 from '../../../assets/img/rose-flower-pngrepo-com.png';
import img5 from '../../../assets/img/price.svg';

const Uu = () => {
  return (
    <section style={{ height: 'fit-content' }}>
      <div className="ooo">
        <div className="back-container">
          <div className="col-md-6">
            <div className="offer-l">
              <span className="ol-2">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
              </span>
              <span className="ol-4">العبوة الخارجية</span>

              <ul>
                <li>
                  <a>
                    <img src={img1} alt="" />
                  </a>
                  <span>لون العلبة مميز</span>
                </li>
                <li>
                  <a>
                    <img src={img2} alt="" />
                    {' '}
                  </a>
                  <span>رائحة حلوة شبيهة بخلاصة الأعشاب</span>
                </li>
                <li>
                  <a>
                    <img src={img3} alt="" />
                    {' '}
                  </a>
                  <span> تحريك الزجاجة لتبين مدى سمكه ولزاجته</span>
                </li>
                <li>
                  <a>
                    <img src={img4} alt="" />
                    {' '}
                  </a>
                  <span> يحتوي الزيت على بعض الرواسب من جوز الهند</span>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="col-md-6">
            <div className="offer-r">
              <div className="or-1">
                <a className="link-top">
                  <span className="or-11">اطلب</span>
                  {' '}
                  <span className="or-12">الآن</span>
                </a>
                {' '}
              </div>
              <div className="or-2">
                <a className="" href="#">
                  <span className="pootel">سعر العبوة: 250 ريال</span>

                  <img
                    style={{
                      width: '200px',
                      height: '180px',
                      paddingTop: '15px',
                      marginTop: '-25px',
                    }}
                    src={img5}
                    alt=" السياحة في تركيا - البحر الاسود - طرابزون"
                    className="link-top"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uu;
