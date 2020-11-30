import React, { useEffect, useState } from 'react'
import './PopupLogin.css'
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Store/Actions/usersActions";

export const PopupLogin = ({ isOpen, openPopupLogin }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [pas, setPas] = useState('')
  const error = useSelector(state => state.root.users.getError);
  const [needToClose, setNeedToClose] = useState(false)

  useEffect(()=> {
    if (error === '' && needToClose === true) {
      openPopupLogin()
      setNeedToClose(false)
    }
  }, [error, needToClose])

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(name,pas))
    setNeedToClose(true)
  }

  return (
    <>
      {isOpen
      &&
      <div className={'popupLogin ' + (isOpen ? 'popupLogin--transitionIn' : 'popupLogin--transitionOut')}>
        <button className={'popupLogin__close'} onClick={openPopupLogin}>
          X
        </button>
        <div className={'popupLogin__content'}>

          <h3>Введите ваш логин и пароль</h3>

          { error &&
            <div className={'popupLogin__error'}>
              {error}
            </div>
          }
          <form onSubmit={loginHandler} className={'popupLogin__form'}>
            <input className={'popupLogin__input input--text'} type="text" onChange={(e) => setName(e.target.value)} />
            <input className={'popupLogin__input input--password'} type="password" onChange={(e) => setPas(e.target.value)} />
            <input className={'popupLogin__input input--submit'} type={'submit'} value={'Авторизация'} />
          </form>

        </div>
      </div>
      }
    </>
  )
}
