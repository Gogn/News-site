import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../Store/Actions/usersActions";

export const Navbar = ({ openPopupLogin, setNight, props }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.root.users.currentUser);
  const themeDark = useSelector(state => state.root.app.colorsDark);
  console.log('props',props)
  return (
    <nav className='navbar navbar--light'>

      <div className="navbar__brand">
        Profilance
      </div>

      <ul className='navbar__list'>

        <li className='navbar__nav-item'>
          <NavLink exact to="/" activeClassName="active" className='nav-item__link'>Главная</NavLink>
        </li>
        <li className='navbar__nav-item'>
          <NavLink to="/news" activeClassName="active" className='nav-item__link'>Новости</NavLink>
        </li>

        { !currentUser &&
          <li className='navbar__nav-item'>
            <button className={'nav-item__button'} onClick={openPopupLogin}>Авторизация</button>
          </li>
        }

        { currentUser &&
        <div className={'navbar__user-form navbar__nav-item'}>
          {currentUser}
          <button className={'nav-item__button'} onClick={() => dispatch(userLogout())}>
            Выйти из аккаунта
          </button>
        </div>
        }

        <li className=''>
          <button className={'nav-item--palette ' + (themeDark ? 'palette--dark' : 'palette--light')}
                  onClick={setNight}>
            {themeDark ? '🌣' : '🌜'}
          </button>
        </li>

      </ul>

    </nav>
  )
}
