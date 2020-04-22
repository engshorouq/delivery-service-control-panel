import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import './style.css';

export default class Sidebar extends Component {
  state = {
    accounts: {
      display: 'hidden',
      arrow: 'down'
    },
    reports: {
      display: 'hidden',
      arrow: 'down'
    },
    msg: {
      display: 'hidden',
      arrow: 'down'
    },
    settings: {
      display: 'hidden',
      arrow: 'down'
    },
  }
  handleClick = (value) => (e) => {
    this.setState(prev => {
      let display = '';
      let arrow = '';
      if (prev[value].display === 'hidden') {
        display = 'block';
        arrow = 'up';
      } else {
        display = 'hidden';
        arrow = 'down';
      }
      if (value === 'accounts')
        return {
          [value]: { display, arrow, },
          reports: {
            display: 'hidden',
            arrow: 'down'
          },
          msg: {
            display: 'hidden',
            arrow: 'down'
          },
          settings: {
            display: 'hidden',
            arrow: 'down'
          },
        }
      if (value === 'reports')
        return {
          [value]: { display, arrow, },
          accounts: {
            display: 'hidden',
            arrow: 'down'
          },
          msg: {
            display: 'hidden',
            arrow: 'down'
          },
          settings: {
            display: 'hidden',
            arrow: 'down'
          },
        }
      if (value === 'msg')
        return {
          [value]: { display, arrow, },
          accounts: {
            display: 'hidden',
            arrow: 'down'
          },
          reports: {
            display: 'hidden',
            arrow: 'down'
          },
          settings: {
            display: 'hidden',
            arrow: 'down'
          },
        }
      if (value === 'settings')
        return {
          [value]: { display, arrow, },
          accounts: {
            display: 'hidden',
            arrow: 'down'
          },
          reports: {
            display: 'hidden',
            arrow: 'down'
          },
          msg: {
            display: 'hidden',
            arrow: 'down'
          },
        }

    });
  }
  render() {

    const { accounts, reports, msg, settings } = this.state;
    return (
      <div className="container">

        <div className="sidebar">
          <h1 className="sidebar__header">فولاج</h1>
          <div className="sidebar__bar">
            <div className='home'>
              <Link to="/" className="sidebar__links ">
                <span>
                  الرئيسية
            <Icon type="home" className='icon-style' />
                </span>

              </Link>
            </div>
            <div className="home">
              <Link to="/neworders" className="si-sidebar__links">
                <span>
                  إدارة الطلبات الجديدة{' '}
                  <Icon type="menu-unfold" className="icons-style" />
                </span>
              </Link>
            </div>
            <div className='home'>
              <Link to="/orders" className="sidebar__links" >
                <span>
                  إدارة الطلبات
            {' '}
                  <Icon type="menu-unfold" className='icons-style' />
                </span>

              </Link>
            </div>


            <div className="sidebar__dropdown lists" onClick={this.handleClick('accounts')}>
              إدارة الحسابات
          {' '}

              <Icon type="tool" className='iconstyle' />
              {' '}
              <Icon type={accounts.arrow} style={{ marginLeft: '1.2rem', fontSize: '15px' }} />
            </div>
            <div className={`sidebar__dropdowncontainer ${accounts.display}`}>
              <Link to="/customers" className="sidebar__links ">
                <span>
                  المستخدمين
              <Icon type="team" className='icon-style' />
                </span>
              </Link>


            </div>









          </div>
        </div>
      </div>
    );
  }
}
