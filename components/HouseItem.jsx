import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { ListItem } from 'material-ui';

class HouseItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { house, onClick } = this.props;
    return (
      <div>
        <ListItem primaryText={house.name} onTouchTap={() => onClick(house.id)}/>
      </div>
    );
  }
}

HouseItem.propTypes = {
  house: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default HouseItem;
