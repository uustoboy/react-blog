import React,{ useState } from 'react'
import Link from "./Link";
import {
  NavMain,
  AvatarInfo,
  AuthorName,
  MottoTxt,
  NavUl,
  NavList,
  NavLink,
  NavTxt
} from "./_style";
import { Icon } from "antd";

const Nav = () => {
  const [links, setCount] = useState([
      { key:0, href: '/', typeIcon: 'home', hrefText: '主页' },
      { key:1, href: '/aboutme', typeIcon: 'user', hrefText: '关于' },
      { key:2, href: 'https://github.com/uustoboy', typeIcon: 'github', hrefText: 'GitHub' },
  ]);
  const [curNum, setCur] = useState(0);

  return (
      <NavMain>
        <AvatarInfo>
          <Link href="/">
            <a>
              <img
                className="avatar-img"
                src="../../static/images/nav/avatar.jpeg"
              />
            </a>
          </Link>
        </AvatarInfo>
        <AuthorName>uustoboy</AuthorName>
        <MottoTxt>Low Code King</MottoTxt>
        <NavUl>
          {links.map(({ key, href, typeIcon, hrefText }) => (
              <NavList key={key}>
                <Link activeClassName='active' href={href} >
                  <a className='nav-link' onClick={() => setCur(key) }>
                    <Icon type={typeIcon} className="nav-icon" />
                    <NavTxt className="nav-txt">{hrefText}</NavTxt>
                  </a>
                </Link>
              </NavList>
            ))}
        </NavUl>
      </NavMain>
    );
}

export default Nav
