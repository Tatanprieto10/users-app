import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import "../../css/login.css"

export default function LoginBox() {
  const navigate = useNavigate()
  
  const [textUser, setTextUser] = useState("")
  const [textPassword, setTextPassword] = useState("")

  function handleTextUser(text){
    setTextUser(text.target.value)
  }
  function handleTextPassword(text){
    setTextPassword(text.target.value)
  }
  function handleClickSingInButton(e) {
    e.preventDefault()

    const formData = new URLSearchParams()
    formData.append('username', textUser);
    formData.append('password', textPassword)

    fetch(
      'https://fastapi-users-40ce4dc91d2d.herokuapp.com/login',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: formData.toString()
      }
    )
    .then(res => {
      if (!res.ok) {
        throw new Error("Invalid Credentials")
      }

      return res.json()
    })
    .then(data => {
      console.log(data)
      navigate('/users')
    })
    .catch(error => {
      console.error('Error:', error)
    })
    
  }
  return (
    <div className="general-container">
      <div className="box-container">
        <div className="title-container">
          <h1 className="title">Sign In</h1>
        </div>
        <div className="input-data-container">
          <div className="input-container">
            <label htmlFor="username" className="username-label">Username</label>
            <input type="text" id="username" className="username-input" onChange={handleTextUser} value={textUser}/>
          </div>
          <div className="input-container">
            <label htmlFor="password" className="password-label">Password</label>
            <input type="password" id="password" className="password-input" onChange={handleTextPassword} value={textPassword}/>
          </div>
        </div>
        <div className="sign-in-button-container">
          <input type="submit" value="Sign In" onClick={handleClickSingInButton}/>
        </div>
      </div>
    </div>
  )
}