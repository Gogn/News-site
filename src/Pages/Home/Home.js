import React from 'react'
import './Home.css'
import {useSelector} from "react-redux";

export const Home = () => {
  const currentUser = useSelector(state => state.auth.users.currentUser)
  return (
    <div className='home'>
      <div className={'home__hello'}>
        Привет, {currentUser}
      </div>
    </div>
  )
}
