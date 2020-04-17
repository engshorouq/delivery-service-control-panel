import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from './Components/Layouts/Customers/index';
import Login from './Components/Layouts/Login';
import Home from './Components/Layouts/Home';
import NewOrdersManagement from './Components/Layouts/NewOrdersmanagement';
import OrdersManagement from './Components/Layouts/Ordersmanagement';

import SingleCastomer from './Components/Layouts/SingleCustomer';
// import NotFound from './Components/Layouts/NotFound';
import InProgress from './Components/Layouts/ToBuildLater';

import './App.css';

class App extends Component {

  render() {
    return (
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

          <Route exact path="/in-progress" component={InProgress} />
          <Route exact path="/not-found" component={NotFound} />
          <Route component={NotFound} />

        </Switch>
        <Footer />

      </Router>
    );
  }
}

export default App;
