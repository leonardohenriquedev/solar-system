import React from 'react'
import propTypes from 'prop-types'
import '../App.css'

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props
    return (
      <div data-testid='mission-card' className='mission-card'>
        <p data-testid='mission-name' className='mission-name'>
          {name} 👨🏻‍🚀
        </p>
        <div className='show-on-hover'>
          <p data-testid='mission-name' className='mission-name inside' >
            {name} 👨🏻‍🚀
          </p>
          <p data-testid='mission-year' className='mission-year'>
            {year} 📆
          </p>
          <p data-testid='mission-country' className='mission-country'>
            {country}
          </p>
          <p data-testid='mission-destination'>{destination} 💫</p>
        </div>
      </div>
    )
  }
}

MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired
}

export default MissionCard
