import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddHouse from '../components/AddHouse';
import * as HouseActions from '../actions/Houses';
import { RaisedButton, HardwareMouse } from 'material-ui';
import { red100, red900, fullWhite, lightWhite, blue300, yellow300 } from "material-ui/styles/colors";

class AddHouseContainer extends Component {

  state = { show : false };

  render() {
    const { show } = this.state;
    const { houseActions } = this.props;
    const style = { margin: 35 };

    return (
      <div>

        <RaisedButton backgroundColor={blue300} style={style} onClick ={() => this.setState({ show: !show }) }> Avaa talon lisäys </RaisedButton>
             { show 
                    ? <div> <AddHouse addHouse ={ houseActions.addHouse }/></div>
                    : null
                }

       
      </div>
    );
  }
}

AddHouseContainer.propTypes = {
  houseActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    houseActions: bindActionCreators(HouseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHouseContainer);
