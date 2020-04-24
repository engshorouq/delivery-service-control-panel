import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Col } from 'react-bootstrap';
import './style.css';
import logo from '../../assets/img/logo.png';

class Header extends Component {
  state = {
    a: 3,
    b: 1,
    c: 2,
    d: 4,
  };

  render() {
    const { totalQty } = this.props;
    const { a, b, c, d } = this.state;

    return (
      <>
        <div style={{ height: '45px' }}>
          <div className="ed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="ed-com-t1-left">
                    <ul>
                      <li>
                        <a href="#">Phone: 920010925</a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/VOLAZF/?ref=bookmarks">
                          <li>
                            <i className="fab fa-facebook" aria-hidden="true" />{' '}
                          </li>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/volage_oil/

"
                        >
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/volage_oil">
                          <li>
                            <i className="fab fa-twitter" aria-hidden="true" />{' '}
                          </li>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ed-com-t1-right">
                    <ul>
                      <li>
                        <a href="/login">تسجيل الدخول</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar bg="light" expand="lg" className="Navbar__container">
          <Navbar.Brand>
            <Link to="/" className="navbar__link navbar__brand">
              <img src={logo} alt="imageLogo" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navigation">
            <Col md="auto">
              <Nav>
                <a
                  href={`/products/detalis/${d}`}
                  className="navbar__link--text"
                >
                  زيت الشيب
                </a>
                <a
                  href={`/products/detalis/${b}`}
                  className="navbar__link--text"
                >
                  زيت الإنبات
                </a>
                <a
                  href={`/products/detalis/${c}`}
                  className="navbar__link--text"
                >
                  زيت الصحة
                </a>
                <a
                  href={`/products/detalis/${a}`}
                  className="navbar__link--text"
                >
                  زيت التنقية
                </a>

                <a href="/shopping-cart" className="navbar__link--text">
                  <i
                    style={{ marginRight: '10px' }}
                    className="fa fa-shopping-cart"
                    aria-hidden="true"
                  />
                  {totalQty > 0 ? (
                    <span
                      style={{
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        color: '#a22a5f',
                      }}
                      className="badge emt"
                    >
                      {totalQty}
                    </span>
                  ) : null}
                  سلة الشراء
                </a>

                <a href="/" className="navbar__link--text">
                  الرئيسية
                </a>
              </Nav>
            </Col>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default withRouter(Header);
