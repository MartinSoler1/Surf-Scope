import React from 'react'
import Component from './Component'


const SpotList = (props) => {

  return (
    <div> <ul className="list-unstyled m-4">
        { props.spot.map((x) => (
          <Component
            key={x.id}
            img={x.img}
            foot={x.foot}
            location={x.location}
            description={x.description}
          />
        ))}
      </ul></div>
  )
}

export default SpotList