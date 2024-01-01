import React from 'react';


const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
  }) => {
    return (
        <ul>
          <li>Good:<span>{good}</span></li>
          <li>Neutral:<span>{neutral}</span></li>
          <li>Bad:<span>{bad}</span></li>
          <li>Total:<span>{total}</span></li>
          <li>Positive feedback:<span>{positivePercentage}%</span></li>
        </ul>
    );
    };

export { Statistics };
