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
  message: PropTypes.string
};

Home.defaultProps = {
  web3: null,
  message: "loading"
};

export default Home;
