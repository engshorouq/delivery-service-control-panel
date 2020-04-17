import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import {
  Button,
  Select,
  Modal,
  Form,
  Input,
  Cascader,
  Icon,
  notification,
  Table
} from "antd";

const { Option } = Select;


class ViewForm extends React.Component {
  state = {
    visible: false,
    storeNameArray: [],
    itemsInputs: [],
    key: 0,
    storeName: ""
  };

  componentDidMount() {
    this.setState({
      itemsInputs: this.props.itemsArray
        ? JSON.parse(JSON.stringify(this.props.itemsArray))
        : []
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
      itemsInputs: this.props.itemsArray
        ? JSON.parse(JSON.stringify(this.props.itemsArray))
        : []
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const {
      customerName,
      phoneNumber,
      customerAddress,
      orderStatus,
      orderPrice
    } = this.props;
    const { getFieldDecorator } = this.props.form;
  
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: phoneNumber.substring(0, 4)
    })(
      <Select style={{ width: 70 }}>
        <Option value="970">{phoneNumber.substring(0, 4)}</Option>
      </Select>
    );
    return (
      <React.Fragment>
        <Icon
          type="profile"
          style={{
            fontSize: "1.2rem",
            color: "rgba(0, 0, 0, 0.65)"
          }}
          onClick={this.showModal}
        />
        <Modal
          title=" عرض الطلب"
          className="viewModal"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          cancelText="إالغاء"
          destroyOnClose={true}
          style={{ direction: "rtl", width: "575" }}
          closable={false}
        >
          <div className="view__captain">
            <div className="view__captain-box">
              <p className="view__captain__paragraph">اسم الزبون : </p>
              <p className="view__captain-value">{customerName}</p>
            </div>
            <div className="view__captain-box">
              <p className="view__captain__paragraph">تاريخ الطلبية : </p>
              <p className="view__captain-value">{this.props.orderDate}</p>
            </div>

            <div className="view__captain-box">
              <p className="view__captain__paragraph"> عنوان الزبون : </p>
              <p className="view__captain-value">{customerAddress}</p>
            </div>

            <div className="view__captain-box">
              <p className="view__captain__paragraph">حالة الطلب : </p>
              <p className="view__captain-value">
                {orderStatus == 0 ? "مستلم" : "غير مستلم"}
              </p>
            </div>
            <div className="view__captain-box">
              <p className="view__captain__paragraph"> هاتف الزبون: </p>
              <p className="view__captain-value">{phoneNumber}</p>
            </div>
        
            <div className="view__captain-box">
              <p>السعر الكلي : </p>
              <p className="view__captain-value">{orderPrice} ر.س</p>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}


const ViewPopup = Form.create()(ViewForm);


class DeletePopup extends Component {
  state = {
    visible: false,
    id: this.props.id
  };
  openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: message,
      duration: 1.5
    });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    fetch(`/api/v1/deleteOrder/${this.props.id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(res => {
        const { error } = res;
        if (error) {
          this.openNotificationWithIcon("error", error);
        } else {
          this.props.deleteRow(this.props.id);
          this.openNotificationWithIcon("success", "Delete Done");
        }
      })
      .catch(() => {
        this.openNotificationWithIcon("warning", "Error, please try again");
      });
  };
  handleCancel = e => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <React.Fragment>
        <Icon
          type="delete"
          style={{
            fontSize: "1.2rem",
            color: "rgba(0, 0, 0, 0.65)"
          }}
          onClick={this.showModal}
        />
        <Modal
          title="حذف الطلب"
          visible={this.state.visible}
          onOk={this.handleOk}
          cancelText="الغاء"
          okText="حذف"
          onCancel={this.handleCancel}
          style={{ direction: "rtl" }}
          className="deleteModal"
        >
          <p>هل تريد بالتأكيد حذف الطلب ؟</p>
        </Modal>
      </React.Fragment>
    );
  }
}

export {
  
  DeletePopup, ViewPopup
};
