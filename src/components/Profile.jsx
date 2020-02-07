import React from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from "react-netlify-identity";

const Profile = ({ showModal }) => {
	const identity = useIdentityContext();

	const userID = identity && identity.user && identity.user.email

	const loggedIn = identity && identity.isLoggedIn;

	const name = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name;

	return (
		loggedIn &&  (
			<div className="dashboard-header">
				<nav>
					<Link to="/dashboard/todos" activeClassName="active"> Todos</Link>
					<Link to="/dashboard/secret" activeClassName="active"> Secret</Link>
					<Link to="/dashboard/identity" activeClassName="active"> Identity</Link>
					<Link to="/dashboard/manager" activeClassName="active"> Manager</Link>
				</nav>

				<div>
					<span> User: {name || userID} </span>
					<button onClick={ showModal }> X </button>
				</div>
			</div>
		)
	)
}

export default Profile;
