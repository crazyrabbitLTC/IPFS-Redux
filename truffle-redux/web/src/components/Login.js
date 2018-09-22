import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Block from './Block';
import Content from './Content';
import AccountBar from './accountBar';
import SignupForm from './SignupForm';

export function Login(props) {
	return (
		<Fragment>
			<div className="Login-Container">
				<div className="Signup">Signup</div>
        <div className="Signup-Form"><SignupForm {...props}/></div>
			</div>
		</Fragment>
	);
}

Login.propTypes = {
	web3: PropTypes.object
};

Login.defaultProps = {
	web3: null
};

export default Login;
