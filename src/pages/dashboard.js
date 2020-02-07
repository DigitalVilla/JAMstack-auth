import React, { useEffect, useState } from 'react';
import { navigate } from "gatsby";
import IdentityModal from "react-netlify-identity-widget";
import { Router } from "@reach/router";
import Layout from "../components/Layout.jsx";
import Profile from "../components/Profile.jsx";
import Private from "../routes/Private.jsx";
import Secret from "../routes/Secret.jsx";
import Identity from "../routes/Identity.jsx";
import Manager from "../routes/Manager.jsx";
import Todos from "../routes/Todos.jsx";
import Login from "../routes/Login.jsx";

import 'react-netlify-identity-widget/styles.css';

const Dashboard = ({ location }) => {
	const [isVisible, setVisibility] = useState(false);

	useEffect(() => {
		if (location.pathname.match(/^\/dashboard\/?$/)) {
			navigate('/dashboard/login', { replace: true });
		}
	}, [location]);

	// Helper functions
	const showModal = () => setVisibility(!isVisible);

	return (
		<Layout>
			<Profile showModal={showModal} />

			<Router>
				<Private path='/dashboard/secret' component={Secret}/>
				<Private path='/dashboard/identity' component={Identity}/>
				<Private path='/dashboard/manager' component={Manager}/>
				<Private path='/dashboard/todos' component={Todos}/>
				<Login path='/dashboard/login' showModal={showModal} />
			</Router>

			<IdentityModal
				showDialog={isVisible}
				onCloseDialog={showModal}
			/>
		</Layout>
	)
}

export default Dashboard;