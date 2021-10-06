import React, { Component } from 'react';


class SuperHeroTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    superheroRow = (props) => {
        return props.superheroes.map( (superhero, index) => {
            const { id, name, primaryAbility, secondarAbility } = superhero;
            return (
                <tr className='row text-center' key={id}>
                    <td className='col-4'>{name}</td>
                    <td className='col-4'>{primaryAbility}</td>
                    <td className='col-4'>{secondarAbility}</td>
                </tr>
            )
        })
    }

    render() { 
        return ( 
            <table id='superheroes' className='container-fluid'>
                <thead>
                    <tr className='row text-center'>
                        <th className='col-4'>Name</th>
                        <th className='col-4'>Primary</th>
                        <th className='col-4'>Secondary</th>
                    </tr>
                </thead>
                <tbody>
                    {this.superheroRow(this.props)}
                </tbody>
            </table>
         );
    }
}
 
export default SuperHeroTable;