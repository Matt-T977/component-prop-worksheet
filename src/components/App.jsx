import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertButton from './AlertButton/AlertButton';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: 'Reggie',
      lastName: 'White',
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie'],
      alert: 'button',
      superheroes: [
        {
            superheroId: 1,
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondarAbility: 'Rich'
        },
        {
            superheroId: 2,
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondarAbility: 'Fly'
        },
        {
            superheroId: 3,
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondarAbility: 'Shoots web'
        }
      ]
     }
  }


  render() { 
    return ( 
      <div>
        <div>
          <DisplayName name={this.state} />
          <NamesList namesList={this.state.names} />
          <AlertButton alert={this.alert} />
          <SuperHeroTable superheroes={this.state.superheroes} />
        </div>
      </div>
     );
  }
}
 
export default App;