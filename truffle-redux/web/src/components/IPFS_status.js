import React, { Fragment } from 'react';
import PropTypes from 'prop-types';



export function Home(props) {
  return (
    <Fragment>
      <h3>HERE WE ARE!</h3>
    </Fragment>
  );
}

Home.propTypes = {
  web3: PropTypes.object,
  message: PropTypes.object
};

Home.defaultProps = {
  web3: null,
  message: {message: "empty"}
};

export default Home;
