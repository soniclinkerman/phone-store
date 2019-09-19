import React, {Component} from 'react'
import {Link} from "react-router-dom"
import logo from "../Ak Logo.jpg"
import styled from "styled-components"

import {ButtonContainer} from "./Button"

export default class Navbar extends Component {
  render() {
  return ( <NavWrapper className="navbar navbar-expand-sm navbar dark px-sm-5 navbar-dark">
    {/*
    https://www.iconfinder.com/icons/1243689/call_phone_icon
    Creative Commons (Attribution 3.0 Unported);
    https://www.iconfinder.com/Makoto_msk */}
    <Link to="/">
    <img src={logo} alt="store" className="navbar-brand" />
    </Link>
    <ul className="navbar-nav align-items-center">
    <li className="nav-item ml-5">
    <Link to="/" className="nav-link">
    products
    </Link>
    </li>
    </ul>
    <Link to="/cart" className="ml-auto">
    <button>

    <span className= "mr-2">
      <i className="fas fa-cart-plus" />   My Cart
    </span>
    </button>

    </Link>
    </NavWrapper>
  );
  }
}
const NavWrapper = styled.nav `
  background: var(--lightBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }


`
