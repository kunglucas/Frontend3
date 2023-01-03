import React, { useState } from 'react';
import './Calc.component.scss';
const Calc = ({ users }) => {


  const ages = users.map((user) => {
    return user.age
  const ages = users.map((user) => {
    return user.age
  });

  const sum = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return <div>Total age: {sum}</div>;
}
   
  export default Calc;