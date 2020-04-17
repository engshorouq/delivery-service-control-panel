import React, { Component } from "react";
import axios from "axios";
import { DatePicker, Input, Button, Icon, notification } from "antd";

import moment from "moment";
import Header from "../../CommonComponent/Header/index";
import TableComponent from "../../CommonComponent/Table/Table";
import {
  DeletePopup,
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




  changeStatus = (key) => e => {
    console.log(e, 88, key)
    const formData = new FormData();
    formData.append("e", e);

    fetch(`/api/v1/putStatus/${key}`, {
      method: "PUT",
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        if (res.result) {
          console.log(45, res.result)
          notification.success({
            message: "تم تغيير حالة الطلب بنجاح",
            duration: 1.5,
          });
        } else {

          notification.open({
            message: res.error,
            duration: 1.5,
          });
        }
      })
      .catch(err => {
        console.log(88, err)

        notification.error({
          message: "هناك خطأ اعد المحاولة مرة اخرى",
          duration: 1.5,
        });
      });






  };


  componentDidMount() {
    axios
      .get("/api/v1/viewnewOrders")
      .then(res => {

        if (res.status === 204) {
          console.log(204);

          let error = [...this.state.error];
          error.response = res;
          error.response.data = "Error, No orders yet.";
          this.setState({ error });
        } else {
          console.log(203);

          this.setState({ orders: res.data });
        }
      })
      .catch(error => {
        console.log(11, error, 22);
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



  filter = async (type, value) => {
    const { date, status, orders } = this.state;
    let filtered = [];
    if (type === "date") {
      await this.setState({ date: value });


      if (value.length > 0) {
        filtered = this.dateFilter(orders);
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
            <Header title={"إدارة الطلبات الجديدة"} Icon={<Icon type="carry-out" />} />
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

                  <Button
                    className="ordersManagement_filter-button"
                    type="primary"
                    onClick={this.clearFields}
                  >
                    إفراغ الحقل
                  </Button>
                </div>
                <TableComponent
                  pageName="neworders"
                  DeletePopup={DeletePopup}
                  changeStatus={this.changeStatus}

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
