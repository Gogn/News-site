import React from 'react'
import './Home.css'
import {useSelector} from "react-redux";

export const Home = () => {
  const currentUser = useSelector(state => state.root.users.currentUser)
  return (
    <div className='home'>
      <h1 className={'home__hello'}>
        Привет, {currentUser ? currentUser : 'гость'}
      </h1>
    </div>
  )
}
