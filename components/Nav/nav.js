import React from 'react'
import Link from 'next/link'
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
// const links = [
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

const Nav = () => (
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
      <NavList>
        <Link href="/">
          <a className="nav-link active">
            <Icon type="home" className="nav-icon" />
            <NavTxt className="nav-txt">主页</NavTxt>
          </a>
        </Link>
      </NavList>
      <NavList>
        <Link href="/aboutme">
          <a className="nav-link">
            <Icon type="user" className="nav-icon" />
            <NavTxt className="nav-txt">关于</NavTxt>
          </a>
        </Link>
      </NavList>
      <NavList>
        <Link href="https://github.com/uustoboy">
          <a className="nav-link">
            <Icon type="github" className="nav-icon" />
            <NavTxt className="nav-txt">GitHub</NavTxt>
          </a>
        </Link>
      </NavList>
    </NavUl>
  </NavMain>
  // <nav>
  //   <ul>
  //     <li>
  //       <Link prefetch href="/">
  //         <a>Home</a>
  //       </Link>
  //     </li>
  //     <ul>
  //       {links.map(({ key, href, label }) => (
  //         <li key={key}>
  //           <Link href={href}>
  //             <a>{label}</a>
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </ul>
  // </nav>
);

export default Nav
