import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { ListItem } from 'material-ui';

class HouseItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { house, onClick } = this.props;
   
    let currentdate = new Date(); 
    let date = currentdate.getDate() + "." + (currentdate.getMonth()+1)  + "." + currentdate.getFullYear();
    let pva = currentdate.getDay()-1;
    let when = 0;
    let days = ['maanantaina','tiistaina','keskiviikkona','torstaina','perjantaina','lauantaina','sununtaina'];
    
   //  console.log('tänään on :'+ days[pva] + ' , ' + pva + ' ja kello on :' + time);
   // console.log('Siivouspäivä=' + house.date);
   // console.log(house.date === date );
   
    if (house.date === date) when = 'tänään ' + days[pva] ;
    else if (house.date === date-1) when = 'eilen ' + days[pva];
    else when = days[pva] + ' , ' + house.date;


    return (
      <div>
       
       { house.done===1 &&
        <ListItem secondaryText=
       {house.id+' ' + house.name + ' on siivottu ' + when + ' kello ' + house.time + '.' } onTouchTap={() => onClick(house.id)} />
       }
        { !house.done &&
        <h3>
        <ListItem primaryText=
       {house.id+' ' + house.name + ' on siivoamatta.'}  onTouchTap={() => onClick(house.id)} />
        </h3>
       }
 
       

      </div>

  );
  /*

        { house.date === date &&
         <ListItem primaryText= {house.id+' ' + house.name + ' on siivottu tänään!'}/>
        }
        { house.date === date-1 &&
         <ListItem primaryText= {house.id+' ' + house.name + ' on siivottu eilen'}/>
        }


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
