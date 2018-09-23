import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string'


class SingleProduct extends React.Component {
  constructor(props){
    super(props)

  }
  componentDidMount() {
    console.log(this.props.location.search) 
  }

  render(){
    return (
      <Fragment>

      </Fragment>
    );
  }
}

SingleProduct.propTypes = {
	web3: PropTypes.object
};

SingleProduct.defaultProps = {
	web3: null
};

export default SingleProduct;
