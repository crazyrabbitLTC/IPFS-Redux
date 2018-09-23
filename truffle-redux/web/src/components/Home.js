import React, { Fragment } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';

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
