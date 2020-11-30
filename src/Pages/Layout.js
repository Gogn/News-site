import React, { useState } from 'react';
import './Layout.css'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../Components/Navbar/Navbar";
// import MenuToggle from "../../Components/Navigation/MenuToggle/menuToggle";
import { PopupLogin } from "../Components/PopupLogin/PopupLogin";
import { switchTheme } from "../Store/Actions/appActions";

export const Layout = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const themeDark = useSelector(state => state.root.app.colorsDark);

  const [popupLoginIsOpen, setPopupLoginIsOpen] = useState(false)

  const handlePopupLogin = () => {
      setPopupLoginIsOpen(!popupLoginIsOpen)
  }


    return (
      <div className={'layout ' + (themeDark ? 'layout--dark' : 'layout--light')}>

        <PopupLogin
          isOpen={popupLoginIsOpen}
          openPopupLogin={() => handlePopupLogin()}
        />

        <Navbar
          openPopupLogin={() => handlePopupLogin()}
          setNight={() => dispatch(switchTheme())}
        />

        <main className={'layout__main'}>
          {props.children}
        </main>

      </div>
    )
}
