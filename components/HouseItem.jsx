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
        {!house.done &&
        <h3>
        <ListItem primaryText=
       {house.id+' ' + house.name + ' on siivoamatta.'}  onTouchTap={() => onClick(house.id)} />
        </h3>
       }
 
       {house.done===1 &&
        <ListItem secondaryText=
       {house.id+' ' + house.name + ' on siivottu.'} onTouchTap={() => onClick(house.id)} />
       }

      </div>

  );
  /*

  <ListItem primaryText=
        {house.id+' : '+house.name+' '+(house.done ? 'siivottu' : 'siivoamatta')}
         onTouchTap={() => onClick(house.id)}/>

      {!house.done &&
        <h3>
       <ListItem primaryText={house.name + ' on siivoamatta.'}/>
        </h3>
}*/


  }
}

HouseItem.propTypes = {
  house: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default HouseItem;
