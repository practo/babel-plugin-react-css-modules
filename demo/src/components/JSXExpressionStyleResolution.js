import React from 'react';
import classnames from 'classnames';
import './table.css';

export default () => {
  var cname = classnames({'row': true});

  return <div className={classnames('table')}>
    <div className={cname}>
      <div styleName='cell'>A2</div>
      <div styleName='cell'>B2</div>
      <div styleName='cell'>C2</div>
    </div>
  </div>;
};
