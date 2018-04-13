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
    let today = currentdate.getDate();
    let pva = currentdate.getDay();
    let when = 0;
    let days = ['sunnuntaina','maanantaina','tiistaina','keskiviikkona','torstaina','perjantaina','lauantaina'];
    let clday = parseInt(house.date.substring(0, 2));
    // let clday = parseInt(cldaytxt);
    console.log('tänään on :' + today +' ja ' + days[pva] + ' , ' + pva);
    console.log('Siivouspäivä=' + clday);
   
   
    if (clday === today) when = 'tänään ' + days[pva] ;
    else if (clday === today-1) when = 'eilen ' + days[pva-1];
    
    // tämä on hieno jos tällä viikkoa niin laita viikonpäivä??
    else if ((today - clday) <= pva) when = days[pva - (today-clday)];
    
    else when = house.date;


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
