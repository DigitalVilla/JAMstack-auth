import React from 'react';
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import './layout.css';

const Layout = ({children}) => {
	return (
		<IdentityContextProvider url="https://jamthestack-auth.netlify.com">
			<header>
				<Link to="/">JAMstack</Link>
			</header>
			<main>{children}</main>
			<footer> © Digital Villa | All Rights Reserved. </footer>
		</IdentityContextProvider>
	)
}

export default Layout;