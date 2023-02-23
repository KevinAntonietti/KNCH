import React from 'react'
import "./style.scss"
import LOGO from "../../assets/img/logoKNCH.svg"

export default function Menu() {
  return (
    <>
    <nav className='nav-container'>

        <img className="logo-img"src={LOGO} alt="" />

      <ul className='menu'>
        <li className='menu__item'><p className='menu__item__number'>01.</p> <p> {"<home/>"} </p></li>
        <li className='menu__item'><p className='menu__item__number'>02.</p> <p> {"<portfolio>"} </p></li>
        <li className='menu__item'><p className='menu__item__number'>03.</p> <p> {"<skills>"} </p></li>
        <li className='menu__item'><p className='menu__item__number'>04.</p> <p> {"<contact>"} </p></li>
      </ul>
      </nav>
    </>
  )
}
