import React, { useState, useEffect } from 'react';
 import Navbar from './Navbar'
 import {NavLink} from 'react-router-dom'
import Input from '../Atom/Input';
import Button from '../Atom/Button';
import  RegisterStyle from './Register.module.css'
export default function Register() {
   JSON.parse(localStorage.getItem('myInput')) || '';
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [mark, setMark] = useState('');
   const [mark2, setMark2] = useState('');
  useEffect(() => {
    let newData = {
      firstname: fname,
      lastname: lname,
      myEmail: email,
      myPassword: password,
      mark,
      mark2,
    };
    localStorage.getItem('myInput', JSON.stringify(newData));
  }, [fname, lname, email, password]);

  function handleSubmit(e) {
    e.preventDefault();
    let newData = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      mark,
      mark2,
    };
    localStorage.setItem('userList', JSON.stringify(newData));
    setFname('');
    setEmail('');
    setLname('');
    setPassword('');
    setMark('');
    setMark2('');
  }
  return (
    <>
    <Navbar/>
   
      <div className={RegisterStyle.main}>
       
     <div className={RegisterStyle.innercontaner1}>
          <div className={RegisterStyle.header}>Register Form</div>
      
         <div className={RegisterStyle.innercontaner2}>
         <form onSubmit={handleSubmit}>
            <Input
              onChange={(e) => setFname(e.target.value)}
              placeholder="Firstname"
              value={fname}
              className={RegisterStyle.input1}
              required
            />
            <Input
              onChange={(e) => setLname(e.target.value)}
              placeholder="Lastname"
              value={lname}
              className={RegisterStyle.input1}
              required
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              value={email}
              className={RegisterStyle.input1}
              required
            />

            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              value={password}
              type='password'
            className={RegisterStyle.input1}
              required
            />
            <span style={{ display: 'flex', gap: '1rem' }}>
              <Input
                onChange={(e) => setMark(e.target.value)}
                value={mark}
                className={RegisterStyle.input2}
                type="checkbox"
                required
              />
              <p style={{ fontSize: '9px' }}>
                open Chrome. At the top right, click More . Click More tools
                Clear
              </p>
            </span>

              <span style={{ display: 'flex', gap: '2px' }}>
              <Input
                onChange={(e) => setMark2(e.target.value)}
                value={mark2}
                className={RegisterStyle.input2}
                type="checkbox"
                required
              />
              <p style={{ fontSize: '9px' }}>
                Next page go to the Emoji search and search your favourite emoji
                Clear
              </p>
            </span>
            <Button text="Sumbit" className={RegisterStyle.btn} />
            <NavLink className={RegisterStyle.Emoji} to ='/emoji'>😀Emoji</NavLink>
            </form>
          </div>
          </div>
      </div>
   
    </>
  )
}