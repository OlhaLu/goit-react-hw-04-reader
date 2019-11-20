import React from 'react';
import T from 'prop-types';
import style from '../../styles.css';

const Counter = ({ currentValue, totalValue }) => {
  return (
    <div className={style.counter}>
      <p>
        {currentValue}/{totalValue}
      </p>
    </div>
  );
};

Counter.propTypes = {
  currentValue: T.number.isRequired,
  totalValue: T.number.isRequired,
};

export default Counter;
