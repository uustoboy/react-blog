import React from 'react'
import Link from 'next/link'
import Nav from '../components/Nav/nav'
import Footer from '../components/Footer/Footer'
import { GlobalStyle } from "../components/style";
import { IndexUl, IndexList, IndexTitle, IndexBrief, IndexBar, IndexTime, IndexMore, IndexMain } from './_style/_index';
import { Icon } from "antd";

const Home = () => (
  <div>
    <GlobalStyle />
    <Nav/>
    <IndexMain className="main">
        <IndexUl>
        	<IndexList>
        		<IndexTitle>
							<Link href="/detail">申请免费HTTPS</Link>
						</IndexTitle>
        		<IndexBrief>以前网站使用的https是在腾讯云上免费申请的（1年），最近一直没关心过博客，今日一看才发现https到期了，导致网站不能正常访问。

    在腾讯云上继续申请免费证书，发现一直处于待验证状态，不知道是什么原因。于是换了在freessl.org网站上申请。

    在freessl.org上申请也是遇到好多问题。打开freessl.org首页，输入一级域名，点击“创建免费的SSL证书”。在点击之前freessl.org提供了两种证书：TrustAsia和Let's Encrypt。 freessl.org推荐的TrustAsia，使用这个证书我一直没有通过，最后选择了Let's Encrypt才弄成功。
    			</IndexBrief>
    			<IndexBar>
    				<IndexTime>
    					<Icon type="clock-circle" className="index-timeIco" />1年前
    				</IndexTime>
    				<IndexMore>
    					阅读全文 »
    				</IndexMore>
    			</IndexBar>
        	</IndexList>
        </IndexUl>
        <Footer/>
    </IndexMain>
  </div>
);

export default Home
