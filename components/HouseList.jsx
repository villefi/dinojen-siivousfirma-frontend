import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui';
import HouseItem from '../components/HouseItem';

const defaultStyle = {
  width: 300,
  marginLeft: 20
};

class HouseList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { houses, navigateToHouse } = this.props;
    return (
      <div className="house-list" style={defaultStyle}>
        <List className="house-list">
          {houses.map(house =>
            <HouseItem key={house.id} house={house} onClick={navigateToHouse}/>,
          )}
        </List>
      </div>
    );
  }
}

HouseList.propTypes = {
  houses: PropTypes.array.isRequired,
  navigateToHouse: PropTypes.func
};

export default HouseList;
