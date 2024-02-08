import { useState } from "react";
import React from 'react'
import '../../css/userForm.css'

export default function UserForm() {
  const [textUsername, setTextUsername] = useState("")
  const [textName, setTextName] = useState("")
  const [textLastname, setTextLastname] = useState("")
  const [textEmail, setTextEmail] = useState("")
  const [textSalary, setTextSalary] = useState("")
  const [textMovie, setTextMovie] = useState("")
  const [textPassword, setTextPassword] = useState("")

  function handleTextUsername(e) {
    setTextUsername(e.target.value)
  }
  function handleTextName(e) {
    setTextName(e.target.value)
  }
  function handleTextLastname(e) {
    setTextLastname(e.target.value)
  }
  function handleTextEmail(e) {
    setTextEmail(e.target.value)
  }
  function handleTextSalary(e) {
    setTextSalary(e.target.value)
  }
  function handleTextMovie(e) {
    setTextMovie(e.target.value)
  }
  function handleTextPassword(e) {
    setTextPassword(e.target.value)
  }
  function handleClickForm(e) {
    e.preventDefault()
    
    fetch('https://fastapi-users-40ce4dc91d2d.herokuapp.com/user', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: textUsername,
        name: textName,
        lastname: textLastname,
        email: textEmail,
        salary: textSalary,
        movies: [textMovie],
        password: textPassword
      })
    })
    .then(() => {
      setTextName('')
      setTextEmail('')
    })
  }
  return (
    <div className="main-container">
      <form>
        <div className="signup-title">SIGN UP</div>
        <div className="input-data-container">
          <label htmlFor="username">Username: </label>
          <input placeholder="Required" id="username" type="text" onChange={handleTextUsername} value={textUsername}></input>
        </div>
        <div className="input-data-container">
          <label htmlFor="name">Name: </label>
          <input placeholder="Required" id="name" onChange={handleTextName} value={textName}></input>
        </div>
        <div className="input-data-container">
          <label htmlFor="lastname">Lastname: </label>
          <input placeholder="Required" id="lastname" onChange={handleTextLastname} value={textLastname}></input>
        </div>
        <div className="input-data-container">
          <label htmlFor="email">Email: </label>
          <input placeholder="Required" id="email" type="email" onChange={handleTextEmail} value={textEmail}></input>
        </div>
        <div className="input-data-container">
          <label htmlFor="salary">Salary: </label>
          <input placeholder="Optional" id="salary" onChange={handleTextSalary} value={textSalary}></input>
        </div>
        <div className="input-data-container">
          <label htmlFor="movies">Movies: </label>
          <input placeholder="Optional" id="movies" onChange={handleTextMovie} value={textMovie}></input>
        </div>
        <div className="input-data-container">
          <label htmlFor="password">Password: </label>
          <input placeholder="Required" id="movies" onChange={handleTextPassword} value={textPassword}></input>                  
        </div>
        <div className="submit-button-container">
          <input type="submit" value="Create User" onClick={handleClickForm}></input>
        </div>
      </form>
    </div>
  );
}