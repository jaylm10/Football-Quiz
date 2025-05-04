import React,{useContext} from 'react'
import UserContext from '../contexts/UserContext'


const Quiz = () => {
    const {username} = useContext(UserContext);
  return (
    <>
      <h3>Current Username:{username.name}</h3>
    </>
  )
}

export default Quiz
