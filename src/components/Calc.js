import { Link } from 'react-router-dom';
import './Calc.component.scss';
import React, { useState } from 'react';

const Calc = ({ users }) => {


  const ages = users.map((user) => {
    return user.age
  });

  const sum = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return <div>Total age: {sum}</div>;
}
   
  export default Calc;