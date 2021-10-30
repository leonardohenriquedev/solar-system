import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../App.css'


class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planets-container">
        <Title headline="Planetas" />
        
        <div className="planets">{planets.map((planet) => {
          const { name, image } = planet;
          return <PlanetCard planetName={ name } planetImage={ image } key={ name } />;
        })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
