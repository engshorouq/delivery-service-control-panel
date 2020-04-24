import React, { Component } from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import Slider from './Slider';
import Uu from './Uu';
import CardRow from './CardRow/Cards';
import ProductsCard from './ProductsCard/Cards';
import './style.css';

class LandingPage extends Component {
  state = {
    products: [],
    message: '',
  };

  componentDidMount() {
    fetch('/api/v1/products')
      .then(res => res.json())
      .then(({ data, error }) => {
        if (data) this.setState({ products: data });
        else this.setState({ message: error.msg });
      })
      .catch(er => {

        this.setState({ message: er.message });
      });
  }

  render() {
    const { products, message } = this.state;

    return (
      <>
        <Row className="landing__header">
          <Col>
            <h1 className="landing__tweet">
              %زيوت فولاج طبيعية 100
              <br />
              براءة إختراع
              <br />
              فولاج أسلوب حياة
            </h1>
            <div className="btn__tweet__div">
              <a href="#" className="btn__tweet">
                تسوق معنا الآن
                <i className="fa fa-power-off" />
              </a>
            </div>
          </Col>
        </Row>
        <div
          className="bbbb justify-content-center"
          style={{ marginBottom: '2rem' }}
        >
          <div className="spe-title">
            <h2>
              {' '}
              منتجات زيت <span>فولاج المتنوعة</span>{' '}
            </h2>
            <div className="title-line">
              <div className="tl-1" />
              <div className="tl-2" />
              <div className="tl-3" />
            </div>
          </div>
          {message && <Alert variant="danger">{message}</Alert>}
          {products ? (
            products.map(item => {
              return <ProductsCard items={item} />;
            })
          ) : (
            <div className="saved-offer__spinner">
              {' '}
              <Spinner animation="border" variant="info" />
            </div>
          )}
        </div>

        <Row className="landing__aboutus">
          <Col className="about__img" />
          <Col className="about__info">
            <h2 className="landing__title">فولاج أسلوب حياة</h2>
            <p className="about__paragraph">
              زيوت فولاج من زيت جوز الهند وأعشاب طبيعية 100% وبدون إضافات
              كيميائية وحاصلة على براءة اختراع من ألمانية و ترخيص صناعي بالإضافة
              إلى أنه ماركة مسجلة,القوارير مصنوعة في النمسا أغطيتها مصنوعة من
              إيطاليا جميعها مطابقة للمواصفات والمقاييس السعودية
              <br />
              <br />
              فوائد زيت فولاج وحدها ما منحته الشهرة الواسعة والانتشار سواء في
              العالم العربي أو على مستوى العالم، ولا يتوقف الأمر على الحصول على
              فائدة منه فقط بل لأنها تظهر سريعا وفي وقت قياسي على عكس المنتجات
              الأخرى
            </p>
          </Col>
        </Row>
        <div className="bbbb justify-content-center">
          <div className="spe-title">
            <h2>
              {' '}
              زيت فولاج <span>الطبيعي لشعر</span>{' '}
            </h2>
            <div className="title-line">
              <div className="tl-1" />
              <div className="tl-2" />
              <div className="tl-3" />
            </div>
          </div>
          <CardRow />
        </div>
        <Slider />
        <Uu />
        <div style={{ background: 'rgb(236, 241, 247)', paddingBottom: '2%' }}>
          <div className="bbbb justify-content-center">
            <div className="spe-title">
              <h2 className="">
                {' '}
                منتجات زيت <span>فولاج المتنوعة</span>{' '}
              </h2>
              <div className="title-line">
                <div className="tl-1" />
                <div className="tl-2" />
                <div className="tl-3" />
              </div>
            </div>
          </div>
          <div className="player-wrapper">
            <div className="container-fluid d-flex justify-content-center widgit">
              <div className="spe-title">
                <h2 className="vid-spe-title vid-spe-title-mr">
                  {' '}
                  فوائد زيت <span className="spa">فولاج المنقي</span>{' '}
                </h2>
                <p className="le">
                  زيت المنقي من فولاج ينظف الشعر من القمل والصيبان ومقاوم للحكة
                  ومحافظ على جمال الشعر وفي نفس الوقت يعطي مظهر نظيف وقوة ولمعان
                  وطريقة استخدام الزيت سهل جدا قم برج الزجاجة جيدا ويوضع الزيت
                  على فروة الرأس وقم بتدليك الفروة جيدايغطى الرأس بغطاء الرأس
                  الخاص من فولاج لمدة خمس ساعات وثم يغسل بماء عادي وصحي ويفضل
                  استخدام مشط فولاج المصنوع من قرون البقر لفك التشابك وإزلة
                  القشرة
                </p>
              </div>
              <div className="elfsight-app-01b64bbe-c662-4df5-86c8-a2ce887dfd73" />
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=EjeIxlovZo8&feature=youtu.be"
                controls="true"
              />
            </div>
          </div>

          <div className="player-wrapper">
            <div className="container-fluid d-flex justify-content-center ">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=GxmLibEtnYM&feature=youtu.be"
                controls="true"
              />
              <div
                className="bbbb justify-content-center"
                style={{ marginBottom: '2rem' }}
              >
                <div className="spe-title">
                  <h2 className="vid-spe-title">
                    {' '}
                    فوائد زيت <span className="spa">فولاج للإنبات</span>{' '}
                  </h2>
                </div>
                <p className="jh">
                  يكثف الشعر وينبت ويملأ الأماكن الفارغة في فروة الرأس وأيضاً في
                  الذقن ويقوي بصيلات الشعر ويسرع نمو الشعر الاستخدام فقط لمدة
                  ثلاثة أيام في الإسبوع ويفضل خلطه مع زيت فولاج لصحة لنتائج أسرع
                  وأمن على الأطفال والحوامل وغير مضر للأشخاص التي تستخدم صبغات
                  وبروتين الشعر
                </p>
              </div>
            </div>
          </div>
          <div>
            {/*  */}
            <div className="player-wrapper">
              <div className="container-fluid d-flex justify-content-center widgit">
                <div className="spe-title">
                  <h2 className="vid-spe-title vid-spe-title-mr">
                    {' '}
                    فوائد زيت <span className="spa">الشيب فولاج</span>{' '}
                  </h2>
                  <p className="le">
                    زيت الشيب من فولاج يقاوم ويعالج الشيب المبكر ويعزز صبغة
                    الميلانين مع الاستخدام وعودة اللون الطبيعي لشعر ويصفي البريق
                    واللمعان وطريقة استخدام الزيت سهل جدا قم برج الزجاجة جيدا
                    ويوضع الزيت على فروة الرأس وقم بتدليك الفروة جيدايغطى الرأس
                    بغطاء الرأس الخاص من فولاج لمدة خمس ساعات وثم يغسل بماء عادي
                    وصحي ويمكن استخدام زيت الصحة والإنبات والشيب معاً
                  </p>
                </div>

                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=9Ipph0QjXn0&feature=youtu.be"
                  controls="true"
                />
              </div>
            </div>

            {/*  */}
            <div className="player-wrapper">
              <div className="container-fluid d-flex justify-content-center ">
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=9L5gCZ-PwmU&feature=youtu.be"
                  controls="true"
                />
                <div
                  className="bbbb justify-content-center"
                  style={{ marginBottom: '4rem' }}
                >
                  <div className="spe-title">
                    <h2 className="vid-spe-title">
                      {' '}
                      فوائد زيت <span className="spa">الصحة فولاج</span>{' '}
                    </h2>
                  </div>
                  <p className="jh">
                    ينعم الشعر ويطوله ويفك التشابك ويزيل القشرة وفي نفس الوقت
                    يعالج التقصف الاستخدام فقط لمدة ثلاثة أيام في الإسبوع ويفضل
                    خلطه مع زيت فولاج الإنيات لنتائج أسرع وأمن على الأطفال
                    والحوامل وغير مضر للأشخاص التي تستخدم صبغات وبروتين الشعر
                  </p>
                </div>
              </div>
            </div>
            <div />

            {/*  */}
            <div className="icon-float">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/VOLAZF/?ref=bookmarks

                    "
                    className="fb1"
                  >
                    <i className="fab fa-facebook" aria-hidden="true" />
                  </a>{' '}
                </li>
                <li>
                  <a href="https://twitter.com/volage_oil" className="tw1">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </a>{' '}
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=00966570992072&text=&source=&data=&app_absent="
                    className="wa1"
                  >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                  </a>{' '}
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/volage_oil/
                    "
                    className="inst"
                  >
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </a>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default LandingPage;
