import { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Form.component.scss';
//This component outputs the form where you can submit user information. 
function Form() {
  let newDate = new Date()
  const[name, setName] = useState('')
  const[mail, setMail] = useState('')
  const[age, setAge] = useState('')
  const parseAge = parseInt(age);
  const[type, setType] = useState('')
  let year = newDate.getFullYear();
  let date_raw = newDate.getDate();
  let month_raw = newDate.getMonth() + 1;
  const history = useHistory();

  const handleSubmit = async  (e) => {
    e.preventDefault()

    const newPerson = {
      name: name,
      email: mail,
      age: parseAge,
      type: type,
      year: year,
      month: month_raw,
      day: date_raw
      
    }

    const res = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPerson) 
    }).then(() => {
      history.push('/');
    })
      console.log(res)
  }
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name: </label>
      <input type="text" placeholder="John Doe" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
      <br/>
      <label htmlFor="name">Email: </label>
      <input type="email" placeholder="name@example.com" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} required/>
      <br/>
      <label for="type">Type:</label>
      <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="human">Human</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="other">Other</option>
      </select>
      <br/>
      <label htmlFor="name">Age: </label>
      <input type="number" placeholder="Your age" id="age" value={age} onChange={(e) => setAge(e.target.value)} required/>
      <br/>
      <button class="button">Submit</button>
    </form>
  );
}

export default Form;
