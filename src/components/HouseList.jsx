import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui';
import HouseItem from '../components/HouseItem';
import { RaisedButton, HardwareMouse } from 'material-ui';
import { red100, red500, fullWhite, lightWhite, blue300, yellow300 } from "material-ui/styles/colors";


const defaultStyle = {
  width: 500,
  marginLeft: 20
};


// Tässä tehdään lista taloista

class HouseList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  state = { show : false };

  render() {
    const { show } = this.state;
    const style = { margin: 20 };
    const { houses, navigateToHouse } = this.props;
    console.log('Houselistin propsit: ', this.props);
    return (
      <div className="house-list" style={defaultStyle}>
             <RaisedButton backgroundColor={red500} style={style} onClick ={() => this.setState({ show: !show }) }> Listaa talot </RaisedButton>
             { show 
                    ? <div>   <List className="house-list">
                            {houses.map(house =>
                      <HouseItem key={house.id} house={house} onClick={navigateToHouse}/>,
                    )}
                  </List></div>
                    : null
                }
      </div>
    );
  }
}

HouseList.propTypes = {
  houses: PropTypes.array.isRequired,
  navigateToHouse: PropTypes.func
};

export default HouseList;


/*        <List className="house-list">
          {houses.map(house =>
            <HouseItem key={house.id} house={house} onClick={navigateToHouse}/>,
          )}
*/