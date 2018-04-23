import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { ListItem } from 'material-ui';
import { red400 } from 'material-ui/styles/colors';

class HouseItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { house, onClick } = this.props;
   
    let currentdate = new Date(); 
    let today = currentdate.getDate();
    let pva = currentdate.getDay();
    let kuu = 1 + currentdate.getMonth();
    let when = 0;
    let ero = 0;
    let days = ['sunnuntaina','maanantaina','tiistaina','keskiviikkona','torstaina','perjantaina','lauantaina'];
    let dim = [31,28,31,30,31,30,31,31,30,31,30,31];
    let paikka = house.date.indexOf(".");  // Gets the first index where a . occours
    let clday = parseInt(house.date.substr(0, paikka)); // Gets the first part
    let loppu = house.date.substr(paikka + 1);
    let clm = parseInt(loppu.substring(0, 2));

  //  console.log('clday: ', clday, ' clm: ', clm);
  //  console.log('today: ', today, ' kuu: ', kuu);
  //  console.log('tänään on :', today, ' ja ',days[pva], ' , ', pva);
  
    if (kuu === clm) ero = today-clday;  // mikään paikka ei ole siivoamatta yli kuukautta
    else if (kuu === clm+1) ero = today + (dim[kuu-2]-clday);
    else ero=999;
  //  console.log('ERO: ', ero, 'dim: ', dim[kuu-1], 'kuu-1: ', kuu-1, 'dimkoko: ', dim);
    

    if ( ero === 0 ) when = 'tänään ' + days[pva] + ' kello ' + house.time + '.';
    else if (ero === 1) when = 'eilen ' + days[pva-1]  + ' kello ' + house.time + '.';
    else if ((today - clday) >0 && (today - clday) < pva) when = days[pva - (today-clday)] + ', ' + house.date.slice(0, -4);
    else if ((today - clday) < 7 && (today - clday) > pva) when = days[pva + 7-(today-clday)] + ', ' + house.date.slice(0, -4);
    else if (ero === 999) when = 'ajat sitten ' + house.date.slice(0, -4);
    else when = ero + ' päivää sitten ' + house.date.slice(0, -4);


    return (
      <div>
       
       { house.done===1 && ero < 7 &&
        <ListItem secondaryText=
       {house.id+ ' ' + house.worker+' siivonnut ' + house.name + ' talon ' + when } onTouchTap={() => onClick(house.id)} />
       }
       { house.done===1 && ero >= 7 &&
        <h3> <ListItem secondaryText=
       {house.id+ ' ' + house.worker+' siivonnut ' + house.name + ' talon ' + when } onTouchTap={() => onClick(house.id)} />
       </h3>
       }
        { !house.done &&
        <h3>
        <ListItem primaryText=
       {house.id+' ' + house.name + ' on siivoamatta.'}  onTouchTap={() => onClick(house.id)} />
        </h3>
       }
 
       

      </div>

  );
  }
}

 
HouseItem.propTypes = {
  house: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default HouseItem;


/*  render() {
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
 }
}
*/