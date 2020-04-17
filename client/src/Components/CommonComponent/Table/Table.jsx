import React, { Component } from "react";
import { withRouter } from "react-router";
import { Table, Divider, Tag, Icon, Select } from "antd";
import PropTypes from "prop-types";
import DropdownMenu from "./dropdownMenu";
import "./style.css";
const { Option } = Select;

class TableCmponent extends Component {
  state = {
    pageSize: "10",
  };

  paginationSize = pageSize => {
    this.setState({ pageSize });
  };

  componentWillReceiveProps(props) {
    this.setState({ pageSize: props.columns.length })
  }
  render() {
    const {
      ViewPopup,
      columns,
      EditPopup,
      DeletePopup,
      ChangeStatus,
    } = this.props;
    const { pageSize } = this.state;
    const { Column } = Table;
    if (this.props.pageName === "orders") {
      return (
        <div className="table-container">
          <DropdownMenu
            pageSize={pageSize}
            paginationSize={this.paginationSize}
          />
          <Table
            dataSource={columns}
            pagination={{
              pageSize: isNaN(pageSize) ? columns.length : parseInt(pageSize)
            }}
          >
            <Column title="إسم الزبون" dataIndex="customer" key="customer" />
            <Column title="التاريخ" dataIndex="date" key="date" />
            <Column
              title="الحالة"
              dataIndex="b_status"
              key="b_status"
              render={b_status => (
                <span>
                  <Tag
                    color={
                      b_status == 1
                        ? "#f10e15"
                        : b_status == 0
                          ? "green"
                          : "blue"
                    }
                    key={b_status}
                  >
                    {b_status == 0
                      ? "مستلم"
                      : b_status == 1
                        ? "غير مستلم"
                        : b_status}
                  </Tag>
                </span>
              )}
            />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (
                <span>
                  <ViewPopup
                    customerName={record.customer}
                    phoneNumber={record.phone ? record.phone : ""}
                    customerAddress={record.address}
                    itemsArray={record.items}
                    storeId={record.storeid}
                    orderId={record.key}
                    captainName={record.captain}
                    orderDate={record.date}
                    orderStatus={record.b_status}
                    orderPrice={record.price}
                  />
                  <Divider type="vertical" />

                  <Divider type="vertical" />

                  <DeletePopup
                    deleteRow={this.props.deleteRow}
                    id={record.key}
                  />
                </span>
              )}
            />
          </Table>
        </div>
      );
    }


    if (this.props.pageName === "neworders") {
      return (
        <div className="table-container">
          <DropdownMenu
            pageSize={pageSize}
            paginationSize={this.paginationSize}
          />
          <Table
            dataSource={columns}
            pagination={{
              pageSize: isNaN(pageSize) ? columns.length : parseInt(pageSize)
            }}
          >
            <Column title="إسم الزبون" dataIndex="customer" key="customer" />
            <Column title="التاريخ" dataIndex="date" key="date" />
            <Column title="جوال الزبون" dataIndex="phone" key="phone" />
            <Column title="المبلغ الأجمالي(ر.س)" dataIndex="pri" key="pri" />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (

                <span>
                  <Select
                    defaultValue="2"
                    onChange={this.props.changeStatus(
                      record.key
                    )}
                  >
                    <Option value="2">جديد</Option>
                    <Option value="0">تم الاستلام</Option>
                    <Option value="1">غير مستلم</Option>
                  </Select>


                  <Divider type="vertical" />

                  <DeletePopup
                    deleteRow={this.props.deleteRow}
                    id={record.key}
                  />
                </span>
              )}
            />
          </Table>
        </div>
      );
    }


    else if (this.props.pageName === "customers") {
      return (
        <div className="tablecustomer-container">
          <DropdownMenu
            pageSize={pageSize}
            paginationSize={this.paginationSize}
          />
          <Table
            dataSource={columns}
            pagination={{
              pageSize: isNaN(pageSize) ? columns.length : parseInt(pageSize)
            }}
          >
            <Column title="إسم الزبوون" dataIndex="s_name" key="customer" />
            <Column
              title="رقم الجوال"
              dataIndex="s_mobile_number"
              key="mobileNo"
            />
            <Column
              title="الحالة"
              dataIndex="b_status"
              key="status"
              render={status => (
                <span>
                  <Tag
                    color={
                      status === false
                        ? "volcano"
                        : status === true
                          ? "green"
                          : "blue"
                    }
                    key={status}
                  >
                    {status === true
                      ? "فعال /مستلم"
                      : status === false
                        ? " غير فعال/غير مستلم"
                        : status}
                  </Tag>
                </span>
              )}
            />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (
                <span>
                  <Icon
                    onClick={() => {
                      this.props.history.push(
                        `/customers/profile/${record.pk_i_id}`
                      );
                    }}
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="profile"
                  />
                  <Divider type="vertical" />

                  <Icon
                    onClick={this.props.handleClick(
                      "customersPage",
                      "delete",
                      "deleteVisibility",
                      record,
                      record.pk_i_id
                    )}
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="delete"
                  />
                </span>
              )}
            />
          </Table>
        </div>
      );
    }


    else if (this.props.pageName === "singleCustomer") {
      return (
        <div className="table-container">
          <DropdownMenu
            pageSize={pageSize}
            paginationSize={this.paginationSize}
          />
          <Table
            dataSource={columns}
            pagination={{
              pageSize: isNaN(pageSize) ? columns.length : parseInt(pageSize)
            }}
          >
            <Column title="إسم المنتج" dataIndex="product" key="product" />
            product
            <Column title="التاريخ" dataIndex="date" key="date" />

            <Column
              title="الحالة"
              dataIndex="status"
              key="status"
              render={status => (







                <span>
                  <Tag
                    color={
                      status == 1
                        ? "#f10e15"
                        : status == 0
                          ? "green"
                          : "blue"
                    }
                    key={status}
                  >
                    {status == 0
                      ? "مستلم"
                      : status == 1
                        ? "غير مستلم"
                        : "جديد"}
                  </Tag>
                </span>
              )}
            />
            <Column
              title="خيارات"
              key="options"
              render={(text, record) => (
                <span>


                  <Divider type="vertical" />
                  <Icon
                    onClick={this.props.viewValues(
                      "singleCustomer",
                      "deleteVisibility",
                      record.key,
                      record
                    )}
                    style={{
                      fontSize: "1.2rem",
                      color: "rgba(0, 0, 0, 0.65)"
                    }}
                    type="delete"
                  />
                </span>
              )}
            />
          </Table>
        </div>
      );
    }





  }
}

TableCmponent.propTypes = {
  columns: PropTypes.array.isRequired,
  viewPopup: PropTypes.func.isRequired,
  editPopup: PropTypes.func.isRequired,
  deletePopup: PropTypes.func.isRequired
};

const TableComponent = withRouter(TableCmponent);

export default TableComponent;
