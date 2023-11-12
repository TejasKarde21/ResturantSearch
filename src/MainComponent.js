// MainComponent.js
import React from 'react';
import Menues from './Menues';
import Card from './Card';

const MainComponent = ({ searchValue, minRating }) => {
  // Filter restaurants based on searchValue and minRating
  const filteredRestaurants = Menues.restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) &&
    (!minRating || restaurant.rating >= minRating || restaurant.rating === minRating)
  );
  return (
    <div  className='flex flex-wrap justify-around'>
      {filteredRestaurants.map((menu, index) => (
        <Card key={index} name={menu.name} rating={menu.rating} address={menu.address} outcode={menu.outcode} url={menu.URL} postcode={menu.postcode} type={menu.type_of_food}  addressLine2={menu["address line 2"] } />
      ))}
    </div>
  );
};

export default MainComponent;