import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const img= [
    'https://res.cloudinary.com/dtcws1ecu/image/upload/v1676337693/ecommerV2/has6hh31yrshqwswgq8f.png',
    'https://res.cloudinary.com/dtcws1ecu/image/upload/v1675567949/ecommerV2/cdq2gyebdcljqhvh2dys.png' 
]
const Carousel = ({ gradient }) => {
  return (
    <AwesomeSlider
    infinite={true}
    media={[
      {
        source: 'https://res.cloudinary.com/dtcws1ecu/image/upload/v1676337693/ecommerV2/has6hh31yrshqwswgq8f.png',
      },
      {
        source:  'https://res.cloudinary.com/dtcws1ecu/image/upload/v1675567949/ecommerV2/cdq2gyebdcljqhvh2dys.png' 
      },
      {
        source:  'https://res.cloudinary.com/dtcws1ecu/image/upload/v1678606816/ecommerV2/bmrnyadse602fapl8qb6.png' 
      },
    ]} />
  )
}

export default Carousel