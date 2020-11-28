import React, { useState } from 'react';
import './Layout.css'
import { useHistory } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
// import MenuToggle from "../../Components/Navigation/MenuToggle/menuToggle";
// import Drawer from "../../Components/Navigation/Drawer/Drawer";

export const Layout = (props) => {
  const history = useHistory();

  const [state, setState] = useState({
    menu: false
  })

  const toggleMenuHandler = () => {
    setState({
      menu: !this.state.menu
    })
  }


    return (
      <div className={'Layout'}>

        {/*<Drawer*/}
        {/*  isOpen={this.state.menu}*/}
        {/*  onClose={this.toggleMenuHandler}*/}
        {/*  isAuthenticated={this.props.isAuthenticated}*/}
        {/*/>*/}

        {/*<MenuToggle*/}
        {/*  onToggle={this.toggleMenuHandler}*/}
        {/*  isOpen={this.state.menu}*/}
        {/*/>*/}

        <Navbar />

        <main className={'Layout'}>
          {props.children}
        </main>
      </div>
    )
}
