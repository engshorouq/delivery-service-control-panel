import React, { Component } from 'react';
import empty from '../../assets/img/empty-shopping-cart-icon.webp';
import './style.css';

class ViewCart extends Component {
  reduceOneProduct = id => {
    this.props.reduceOneProduct(id);
  };

  removeProduct = id => {
    this.props.removeProduct(id);
  };

  render() {
    const { items, totalPrice, totalQty } = this.props;
    console.log(455441, items);
    return (
      <div className="container-fluid d-flex justify-content-center back">
        {items.length > 0 ? (
          <div>
            {/* <div className="">
              <div className="block-title">
                <h2 style={{ textAlign: 'center' }}>سلة الشراء</h2>
              </div>
            </div> */}
            <div className="bbbb justify-content-center">
              <div className="spe-title">
                <h2 className="">
                  {' '}
                  الشراء{' '}
                  <span style={{ display: '-webkit-inline-box' }}>
                    سلة
                  </span>{' '}
                </h2>
                <div className="title-line">
                  <div className="tl-1" />
                  <div className="tl-2" />
                  <div className="tl-3" />
                </div>
              </div>
            </div>
            {items.map(item => {
              return (
                <div className="kk">
                  <ul className="list">
                    {item.item.map(itm => {
                      return (
                        <>
                          <div style={{ display: 'flex' }}>
                            <li className="">
                              <img
                                width="180px"
                                height="180px"
                                src={itm.imagepath}
                              />
                            </li>
                            <li style={{ paddingTop: '75px' }}>
                              <p className="pb"> {itm.title}</p>
                            </li>
                          </div>
                          <div className="flex m-tt lll">
                            <li>
                              {' '}
                              <span
                                onClick={() => this.reduceOneProduct(itm.id)}
                              >
                                <i
                                  className="fa fa-minus-circle"
                                  aria-hidden="true"
                                />
                              </span>
                            </li>

                            <li style={{ paddingLeft: '10px' }}>
                              {' '}
                              <span onClick={() => this.removeProduct(itm.id)}>
                                <i className="fa fa-trash" aria-hidden="true" />
                              </span>
                            </li>
                          </div>
                        </>
                      );
                    })}
                    <div className="flex m-tt">
                      <li className="">الكمية: {item.qty}</li>

                      <li className="">
                        المبلغ الإجمالي:
                        <span style={{ color: '#a22a5f' }}>
                          ر.س{item.totpp}{' '}
                        </span>
                      </li>
                    </div>
                  </ul>
                </div>
              );
            })}

            <div className="cent">
              <div className="">الكمية الإجمالية:{totalQty}</div>
              <div className="">السعر الإجمالي:ريال سعودي{totalPrice}</div>
            </div>

            <div style={{ marginTop: '15px' }} className="two">
              <a
                href="/checkout"
                type="button"
                style={{
                  boxShadow: 'none',
                  background: '#a22a5f',
                  color: '#fff',
                  position: 'relative',
                  outline: '0 !important',
                  padding: '5px 23px 4px',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '50px',
                }}
                className="btn btn-success"
              >
                الدفع
              </a>
            </div>
          </div>
        ) : (
          <div className="emptycontainer">
            <img src={empty} />
            <h1 className="block-title">: سلة التسوق فارغة</h1>
            <div className="description">
              : لا يوجد أي منتجات في السلة، لماذا لا تقوم بتعبئتها
            </div>
            <a className="bttn" href="/">
              متابعة التسوق
            </a>
          </div>
        )}
      </div>
    );
  }
}
export default ViewCart;
