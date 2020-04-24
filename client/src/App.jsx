import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers from "./Components/Layouts/Customers/index";
import Login from "./Components/Layouts/Login";
import Home from "./Components/Layouts/Home";
import NewOrdersManagement from './Components/Layouts/NewOrdersmanagement';
import LandingPage from './Components/LandingPage/index';
import SingleProduct from './Components/SingleProduct/index';
import CartPage from './Components/CartPage/index';

import CheckoutForm from './Components/CheckoutForm/CheckoutForm';
import RedirectForm from './Components/CheckoutForm/RedirectForm';

import Sucsses from './Components/Sucsses/index';
import Fail from './Components/Fail/index';

import Header from './Components/Header/index';
import Footer from './Components/Footer/index';

import OrdersManagement from "./Components/Layouts/Ordersmanagement";
import SingleCastomer from "./Components/Layouts/SingleCustomer";
import NotFound from "./Components/Layouts/NotFound";

import "./App.css";

class App extends Component {

  state = {
    name: '',
    phone: '',
    address: '',
    items: [],
    totalQty: null,
    totalPrice: null,
    sucsess: null,
    message: '',
  };
  componentDidMount() {
    fetch('/api/v1/session/value')
      .then(res => res.json())
      .then(({ value }) => {
        if (value) {
          const arr = [];
          const obj = value.items;
          Object.keys(obj).map((key, index) => {
            arr.push(obj[key]);
          });
          this.setState({
            items: arr,
            totalPrice: value.totalPrice,
            totalQty: value.totalQty,
          });
        } else this.setState({ message: 'empt cart' });
      })
      .catch(er => {
        this.setState({ message: er.message });
      });
  }
  WrappedComponentWithH = WrappedComponent => props => {
    return (
      <div className="">
        <div className="body-container">
          <Header totalQty={this.state.totalQty} />
          {WrappedComponent}
          <Footer />
        </div>
      </div>
    );
  };
  addToCart = id => {
    fetch(`/api/v1/products/addToCart/${id}`)
      .then(res => res.json())
      .then(({ value }) => {
        if (value) {
          const arr = [];
          const obj = value.items;
          Object.keys(obj).map((key, index) => {
            arr.push(obj[key]);
          });
          console.log(11, value.totalPrice);

          this.setState({
            items: arr,
            totalPrice: value.totalPrice,
            totalQty: value.totalQty,
          });
        } else this.setState({ message: 'empt cart' });
      })
      .catch(er => {
        this.setState({ message: er.message });
      });
  };
  reduceOneProduct = id => {
    fetch(`/api/v1/reduce/${id}`)
      .then(res => res.json())

      .then(({ value }) => {
        if (value) {
          const arr = [];
          const obj = value.items;
          Object.keys(obj).map((key, index) => {
            arr.push(obj[key]);
          });
          this.setState({
            items: arr,
            totalPrice: value.totalPrice,
            totalQty: value.totalQty,
          });
        } else this.setState({ message: 'empt cart' });
      })

      .catch(er => {
        this.setState({ message: er.message });
      });
  };
  removeProduct = id => {
    console.log(22, id);

    fetch(`/api/v1/remove/${id}`)
      .then(res => res.json())
      .then(({ value }) => {
        if (value) {
          const arr = [];
          const obj = value.items;
          Object.keys(obj).map((key, index) => {
            arr.push(obj[key]);
          });
          this.setState({
            items: arr,
            totalPrice: value.totalPrice,
            totalQty: value.totalQty,
          });
        } else this.setState({ message: 'empt cart' });
      })
      .catch(er => {
        console.log(44, er);
        this.setState({ message: er.message });
      });
  };
  render() {
    const { WrappedComponentWithH } = this;

    return (
      // <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/control" component={Home} exact />
          <Route path="/neworders" component={NewOrdersManagement} exact />
          <Route path="/orders" component={OrdersManagement} exact />
          <Route exact path="/customers" component={Customers} />
          <Route
            exact
            path="/customers/profile/:id"
            component={SingleCastomer}
          />
          <Route
            exact
            path="/"
            component={WrappedComponentWithH(
              <LandingPage totalQty={this.state.totalQty} />
            )}
          />
          <Route
            exact
            path="/products/detalis/:id"
            component={routerProps => (
              <SingleProduct
                id={routerProps.match.params.id}
                addToCart={this.addToCart}
              />
            )}
          />
          <Route
            exact
            path="/shopping-cart"
            component={WrappedComponentWithH(
              <CartPage
                removeProduct={this.removeProduct}
                reduceOneProduct={this.reduceOneProduct}
                items={this.state.items}
                totalPrice={this.state.totalPrice}
                totalQty={this.state.totalQty}
              />
            )}
          />
          <Route
            exact
            path="/checkout"
            component={WrappedComponentWithH(
              <CheckoutForm
                totalPrice={this.state.totalPrice}
                totalQty={this.state.totalQty}
              />
            )}
          />
          <Route exact path="/redirect-checkout" component={RedirectForm} />
          <Route
            exact
            path="/succsses"
            component={WrappedComponentWithH(<Sucsses />)}
          />
          <Route
            exact
            path="/fail"
            component={WrappedComponentWithH(<Fail />)}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      // </div>
    );
  }
}

export default App;
