import { useState } from 'react';

function Form() {
  let newDate = new Date()
  const[name, setName] = useState('')
  const[mail, setMail] = useState('')
  const[age, setAge] = useState('')
  let year = newDate.getFullYear();
  let date_raw = newDate.getDate();
  let month_raw = newDate.getMonth() + 1;
  const handleSubmit = async  (e) => {
    e.preventDefault()

    const newPerson = {
      name: name,
      email: mail,
      age: age,
      year: year,
      month: month_raw,
      day: date_raw
    }

    const res = await fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPerson) //Add the variable newperson.
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
      <label htmlFor="name">Age: </label>
      <input type="number" placeholder="Your age" id="age" value={age} onChange={(e) => setAge(e.target.value)} required/>
      <br/>
      <button class="button">Submit</button>
    </form>
  );
}

export default Form;
