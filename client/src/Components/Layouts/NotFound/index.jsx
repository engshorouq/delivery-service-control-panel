import React from 'react';

import WrappedComponent from '../../HOC/WithNavSide';

import './style.css';

const NotFound = () => {
  return (
    <section className="pageNotFoundMain">
      <div>
        <div className="notFoundNumber">404</div>
        <span className="notFoundTitle">نأسف ! الصفحة غير متوفرة</span>
      </div>
    </section>
  );
}

export default WrappedComponent(NotFound);
