import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Calc = ({ blogs }) => {


  const ages = blogs.map((blog) => {
    return blog.age
  });

  const sum = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return <div>Total age: {sum}</div>;
}
   
  export default Calc;