import React from 'react';
import {ButtonToolBar, Button} from 'react-bootstrap'

class CreateStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeName: "",
      storeHash: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  //The onSubmit creates a complex action to submit the state to OrbitDB
  //Later this action should submit a complete body of the Website to IPFS and
  //return the hash of this "store".
  //For now we should submit to OrbitDB and then return this hash to state as
  //StoreHash.
  // return this HASH
  //OrbitDB r
  render() {
    return (
      <form>
        <label>
          Store Name:
          <input
            name="storeName"
            type="number"
            value={this.state.storeName}
            onChange={this.handleInputChange} />
        </label>
        <ButtonToolbar>
        <Button bsStyle="info" >Info</Button>
        </ButtonToolbar>
      </form>

    );
  }
}

export default CreateStore;
