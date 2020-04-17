import React, { Component } from "react";
import axios from "axios";
import { DatePicker, Input, Button, Icon } from "antd";
import moment from "moment";
import Header from "../../CommonComponent/Header/index";
import TableComponent from "../../CommonComponent/Table/Table";
import {
  DeletePopup,
  ViewPopup
} from "../../CommonComponent/Table/Popups";
import WrappedComponent from "../../HOC/WithNavSide";
import "./style.css";

class OrdersManagement extends Component {
  state = {
    orders: [],
    filteredOrders: [],
    date: "",
    status: "",
    error: "",
    filter: false,
    refresh: true
  };

  componentDidMount() {
    axios
      .get("/api/v1/viewOrders")
      .then(res => {
        if (res.status === 204) {
          let error = [...this.state.error];
          error.response = res;
          error.response.data = "Error, No orders yet.";
          this.setState({ error });
        } else {
          console.log(7778888, res.data)
          this.setState({ orders: res.data });
        }
      })
      .catch(error => {
        console.log('ba', error)
        this.setState({
          error
        });
      });

  }

  dateFilter = object => {
    if (object) {
      const { date } = this.state;
      if (date.length) {
        if (date[0] && date[1]) {
          if (date[0].isValid() && date[1].isValid()) {
            const fromDate = date[0].toDate().setHours(0, 0, 0, 0);
            const toDate = date[1].toDate().setHours(0, 0, 0, 0);
            let filtered = object.filter(order => {
              if (
                moment(order.date)
                  .toDate()
                  .setHours(0, 0, 0, 0) >= fromDate &&
                moment(order.date)
                  .toDate()
                  .setHours(0, 0, 0, 0) <= toDate
              ) {
                return true;
              }
            });
            return filtered;
          }
        }
      }
      return object;
    }
  };

  statusFilter = object => {
    if (object) {
      const { status } = this.state;
      if (status) {
        let filtered = [];
        const regex1 = new RegExp(/^[(م)]/);
        const regex2 = new RegExp(/^[(غ)]/);
        filtered = object.filter(order => {
          if (
            (order.b_status === 1 &&
              regex1.test(status) &&
              "مستلم".indexOf(status) != -1) ||
            (order.b_status === 0 &&
              regex2.test(status) &&
              "غير مستلم".indexOf(status) != -1)
          ) {
            return true;
          } else if (order.b_status == status) {
            return true;
          }
        });
        return filtered;
      } else {
        return object;
      }
    }
  };

  filter = async (type, value) => {
    const { date, status, orders } = this.state;
    let filtered = [];
    if (type === "date") {
      await this.setState({ date: value });
      if (status) {
        filtered = this.statusFilter(orders);

        filtered = this.dateFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      }

      else if (value.length > 0) {
        filtered = this.dateFilter(orders);
        this.setState({ filteredOrders: filtered, filter: true });
      } else {
        this.setState({ filteredOrders: [], filter: false });
      }
    } else if (type === "status") {
      await this.setState({ status: value });
      if (date) {
        filtered = this.dateFilter(orders);

        filtered = this.statusFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      }

      else if (value.length > 0) {
        filtered = this.statusFilter(orders);
        this.setState({ filteredOrders: filtered, filter: true });
      } else {
        this.setState({ filteredOrders: [], filter: false });
      }
    }

  };

  clearFields = async () => {
    await this.setState({
      date: "",
      status: "",
      filter: false
    });
  };

  deleteRow = id => {
    this.setState(prev => {
      return { orders: prev.orders.filter(data => data.key !== id) };
    });
  };

  updateOrdersStateVariable = (storeId, phone, address, itms, orderId) => {
    this.setState(prev => {
      prev.orders.forEach(element => {
        if (element.key === orderId) {
          let x = element;
          x.storeId = storeId;
          x.address = address;
          x.phone = phone;
          x.items = itms;
          if (itms.length > 1) {
            x.price = itms.reduce((acc, nxt) => {
              return acc + Number(nxt.price);
            }, 0);
          } else {
            x.price = parseInt(itms[0].price);
          }
          return { element: x };
        }
      });
      this.setState({ refresh: !this.state.refresh });
    });
  };
  updateItemsStateVariable = (itms, orderId) => {
    let x = this.state.orders;
    x.forEach(element => {
      if (element.key === orderId) {
        element.items = itms;
        if (itms.length > 1) {
          element.price = itms.reduce((acc, nxt) => {
            return parseInt(acc.price) + parseInt(nxt.price);
          });
        } else {
          element.price = itms[0].price;
        }
      }
    });
    this.setState({ orders: x });
  };

  render() {
    const { RangePicker } = DatePicker;
    const dateFormat = "DD-MM-YYYY";
    if (!this.state.error) {
      return (
        <div className="ordersManagement-bars-container">
          <div className="ordersManagement-main-container">
            <Header title={"إدارة الطلبات"} Icon={<Icon type="carry-out" />} />
            <div className="ordersManagement_sub-container">
              <div>

                <div className="ordersManagement_filters-container">
                  <div className="ordersManagement_filters-container-timeFilter">
                    <p
                      style={{ textAlign: "right", fontWeight: '600', color: '#a22a5f' }}
                      className="ordersManagemet_timePicker-lable"
                    >
                      إختر الفترة
                    </p>
                    <RangePicker
                      placeholder={["من", "إلى"]}
                      format={dateFormat}
                      onChange={e => this.filter("date", e)}
                      value={this.state.date}
                    />
                  </div>
                  <Input
                    id="statusInput"
                    onChange={e => this.filter("status", e.target.value)}
                    className="ordersManagement_status-filter-input"
                    placeholder="الفلترة حسب الحالة :"
                    value={this.state.status}
                  />

                  <Button
                    className="ordersManagement_filter-button"
                    type="primary"
                    onClick={this.clearFields}
                  >
                    إفراغ الحقول
                  </Button>
                </div>
                <TableComponent
                  pageName="orders"
                  ViewPopup={ViewPopup}
                  DeletePopup={DeletePopup}
                  updateOrdersStateVariable={this.updateOrdersStateVariable}
                  updateItemsStateVariable={this.updateItemsStateVariable}
                  deleteRow={this.deleteRow}
                  columns={
                    this.state.filter === true
                      ? this.state.filteredOrders
                      : this.state.orders
                  }
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ordersManagement_error-class">
          <h1>
            {this.state.error.response
              ? this.state.error.response.status
              : "Error"}{" "}
            {this.state.error.response ? "Error" : ""},
            {this.state.error.response.data
              ? this.state.error.response.data
              : "try again later"}{" "}
          </h1>
        </div>
      );
    }
  }
}

export default WrappedComponent(OrdersManagement);
