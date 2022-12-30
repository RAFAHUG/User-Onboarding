
import './App.css';
import Form from './Form';
import React, { useState } from 'react';
import schema from './formSchema';
import * as yup from 'yup';
import axios from 'axios';

//STEP 4 

const initialFormValues = {
   username:"",
   password:"",
   email:"", 
   checked: false,
}

//STEP 11
const initialFormErrors = {
  username:"",
  password:"",
  email:"", 
  checked:"",
}

function App() {

  //STEP 5
  const [ formValues, setFormValues ] = useState ( initialFormValues );
  //STEP 10
  const [ formErrors, setFormErrors ] = useState ( initialFormErrors );

  const [users, setUsers] = useState ([]);

  //STEP 6 
  const handleChange = (name, value) => {
    validate(name,value);
    setFormValues ({ ...formValues, [name]:value})

  }

  //  STEP 7 
  const handleSubmit = () => {
    axios.post("https://reqres.in/api/users", formValues)
    .then( res => {
      setUsers([res.data, ...users])
    })
    .catch( err => console.log(err))
  }

  //STEP 9 
  const validate = (name, value) => {
    yup.reach(schema,name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]:''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div className="App">
      <Form 
      values={formValues} 
      change={handleChange} 
      errors={formErrors} 
      submit={handleSubmit}
      />
      {users.map(user => (
      <div key={user.id}>
        <p>{user.createdAt}</p>
        <p>{user.email}</p>
      </div>
    ))}
    </div>
    
  );
}

export default App;
