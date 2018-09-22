import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Block from './Block';
import Content from './Content';
import AccountBar from './accountBar';


export function Home(props) {
  return (
    <Fragment>
      <Block {...props} />
      <AccountBar {...props}/>

      <Content {...props} />

    </Fragment>
  );
}

Home.propTypes = {
  web3: PropTypes.object,
};

Home.defaultProps = {
  web3: null,
};

export default Home;
