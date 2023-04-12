import React, { useState } from 'react';
import axios from 'axios';
import '../css/form.css';

function MyForm() {
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');
  const [roll, setRoll] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, roll, dob, age };
    axios.post("http://localhost:3000/students", data)
      .then(response => {
        window.location.reload();
        // do something with the response
      })
      .catch(error => {
        console.log(error);
        // handle the error
      });
  };

  return (
    <form onSubmit={handleSubmit} className='my-form'>
      <label>
        Full Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Date of birth:
        <input type="text" value={dob} onChange={(event) => setDOB(event.target.value)} />
      </label>
      <br />
      <label>
        Roll Number:
        <input type="text" value={roll} onChange={(event) => setRoll(event.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
