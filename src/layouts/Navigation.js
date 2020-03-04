import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.sass";
import Logo from "../components/Logo.js";
import downArrow from "../img/downArrow.svg";

const list = [
  {
    name: "Oferta",
    path: "/",
    classLi: "nav__item nav__ourServiceLink",
    classA: "nav__link--resetStyle",
    img: downArrow,
    submenu: true
  },

  {
    name: "O gabinecie",
    path: "/aboutUs",
    submenu: false,
    classLi: "nav__item nav--noMobileMenu",
    classA: "nav__link--resetStyle"
  },
  {
    name: "Strona główna",
    path: "/",
    submenu: false,
    classLi: "nav__item nav--noDesktopMenu",
    classA: "nav__link--resetStyle"
  },
  {
    name: "Cennik",
    path: "/prizeList",
    submenu: false,
    classLi: "nav__item",
    classA: "nav__link--resetStyle"
  },
  {
    name: "Kontakt",
    path: "/contact",
    submenu: false,
    classLi: "nav__item",
    classA: "nav__link--resetStyle"
  }
];
const submenu = [
  {
    name: "Botox",
    path: "/botox",
    classA: "nav__link nav__linkSubmenu",
    classLi: "nav__submenuItem"
  },
  {
    name: "Kwas hialuronowy",
    path: "/kwas-hialuronowy",
    classA: "nav__link nav__linkSubmenu",
    classLi: "nav__submenuItem"
  },
  {
    name: "Mezoterapia",
    path: "/mezoterapia",
    classA: "nav__link nav__linkSubmenu",
    classLi: "nav__submenuItem"
  },
  {
    name: "Osocze bogatypłytkowe",
    path: "/osocze-bogatypłytkowe",
    classA: "nav__link nav__linkSubmenu",
    classLi: "nav__submenuItem"
  },
  {
    name: "Leczenie nadpotliowści",
    path: "/nadpotliowsc",
    classA: "nav__link nav__linkSubmenu",
    classLi: "nav__submenuItem"
  },
  {
    name: "Leczenie Łysienia",
    path: "/lysienie",
    classA: "nav__link nav__linkSubmenu",
    classLi: "nav__submenuItem"
  },
  {
    name: "Lipozja iniekcyjna",
    path: "/Lipozja",
    classA: "nav__link nav__linkSubmenu",
    classLi: "nav__submenuItem"
  }
];
// {
//   name: "Kontakt",
//   path: "/contact",
//   submenu: false,
//   classLi: "nav__item",
//   classA: "nav__link--resetStyle"
// }
const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name} className={item.classLi}>
      <NavLink to={item.path} className={item.classA}>
        {item.name}
        {item.img && <img src={item.img} alt="Dropdown menu" />}
      </NavLink>
      <ul className="nav__submenu">
        {item.submenu &&
          submenu.map(itemLi => (
            <NavLink to={itemLi.path} className={itemLi.classA}>
              <li key={itemLi.name} className={itemLi.classLi}>
                {itemLi.name}
              </li>
            </NavLink>
          ))}
      </ul>
    </li>
  ));

  return (
    <nav className={"nav"}>
      <Logo />
      <ul className={"nav__list"}>{menu}</ul>
    </nav>
  );
};

export default Navigation;
