import { useEffect, useState } from 'react';
import React from 'react'
import UserBox from '../usersData/usersBox'

export default function LoginMe() {
  const [user, setUser] = useState()
  useEffect(() => {
    fetch('http://localhost:8000/login/me')
      .then(res => res.json())
      .then(res => setUser(res))
  })
  return (
    <div>
      <UserBox 
        username={user.username} 
        name={user.name} 
        lastname={user.lastname} 
        email={user.email} 
        salary={user.salary} 
        movies={user.movies} 
        key={user.id}
      />
    </div>
  )
}
