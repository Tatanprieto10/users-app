import { useEffect, useState } from 'react';
import '../../css/userBox.css'
import UserBox from './usersBox';
import React from 'react'

export default function Userdata() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://fastapi-users-40ce4dc91d2d.herokuapp.com/users/')
      .then(res => res.json())
      .then(res => setUsers(res))
  }, [])
  return (
    <div>
      {
        users?.map(user => (
          <UserBox username={user.username} name={user.name} lastname={user.lastname} email={user.email} salary={user.salary} movies={user.movies} key={user.id} />
        ))
      }
    </div>
  );
}