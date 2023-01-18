//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [state, setState] = useState({
    firstName: '',
    validName: true,
    lastName: '',
    emailId: '',
    validEmail: true,
    phoneNumber: '',
    validPhone: true,
    password: '',
    validPassword: true
  })

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  } 

  function isNameValid(value)
  {
    value= value.trim();
    if(value.length===0 || typeof(value)!=='string')
    {
      console.log("Enter1")
      setState({...state,validName: false})
    }
    for(let i=0;i<value.length;i++)
    {
      if(value[i]===' ') 
      {
        console.log("Enter2")
        setState({...state,validName: false})
      }
    }
    if(/[!@#$%^&*()]/.test(value))
    {
      console.log("Enter3")
      setState({...state,validName: false})
    }
  }

  function isEmailValid(value)
  {
    if(value.length===0 || typeof(value)!=='string')
    {
      setState({...state,validEmail: false})
    }
    if (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(value))
    {
      setState({...state,validEmail: false})
    }
  }

  function isPhoneValid(value)
  {
    //const n= Number(value);
    if(value.length!==10)
    {
      setState({...state,validPhone: false})
    }
    // if(! /\d{10}/.test(n))
    // {
    //   setState(state.validPhone= false)
    // }
    for(let i=0;i<value.length;i++)
    {
      if(value[i]===' ')
      {
        setState({...state,validPhone: false})
      }
    }
  }

  function isPasswordValid(value)
  {
    if(value.length<8)
    {
      setState({...state,validPassword: false})
    }
    if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value))
    {
      setState({...state,validPassword: false})
    }
  }

  function action(e)
  {
    //e.preventDefault();
    isNameValid(state.firstName);
    isNameValid(state.lastName);
    isEmailValid(state.emailId);
    isPhoneValid(state.phoneNumber);
    isPasswordValid(state.password);
  }
  function myFunction(e) 
  {
    e.preventDefault();
    var x = document.getElementById("pwd");
    if (x.type === "password") x.type = "text";
    else x.type = "password";
  }

  return (
    <div>
      <div className='title'>
        <h2>Form</h2>
      </div>
      <div className='form'>
        <form>
          <label>FirstName:</label>
          <input type='text' name='firstName' value={state.firstName} onChange={(event) => { handleChange(event) }}></input>
          <br></br>
          <label>LastName:</label>
          <input type='text' name='lastName' value={state.lastName} onChange={(event) => { handleChange(event) }}></input>
            {(state.validName)?<></>:<><p>Please provide a valid name with no space in between</p></>}
          <br></br>
          <label>EmailId:</label>
          <input type='text' name='emailId' value={state.emailId} onChange={(event) => { handleChange(event) }}></input>
          {state.validEmail?<></>:<p>Please provide a valid email id</p>}
          <br></br>
          <label>PhoneNumber:</label>
          <input type='text' name='phoneNumber' value={state.phoneNumber} onChange={(event) => { handleChange(event) }}></input>
          {state.validPhone?<></>:<><p>Please a valid Phone Number</p></>}
          <br></br>
          <label>Password:</label>
          <input type='password' name='password' value={state.password} id='pwd' onChange={(event) => { handleChange(event) }}></input>
          {state.validPassword?
          <>
          <button onClick={(e)=> {myFunction(e)} }>showPassword</button>
          </>:<><p>Please enter a password with a special, numeric ,Uppercase, lowercase character</p></>}
        </form>
        <button className='btn' onClick={(e)=>{action(e)}}>Submit</button>
      </div>

    </div>
  );
}

export default App;
