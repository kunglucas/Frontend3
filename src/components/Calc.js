import { Link } from 'react-router-dom';
import './Calc.component.scss';
import React, { useState } from 'react';

//This component shows under the table and caculates the total age of the users that are in the table. 
//The sum of the age of everyone updates everytime the form is filled out with new information.
const Calc = ({ users }) => {


  const ages = users.map((user) => {
    return user.age
  });

  const sum = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return <div>Total age: <strong className="sum">{sum}</strong></div>;
}
   
  export default Calc;