import React, { useState } from 'react';
import Navbar from "./Navbar";
import MainComponent from "./MainComponent";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [minRating, setMinRating] = useState('');

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  function handleRatingChange(event) {
    const enteredValue = parseInt(event.target.value, 10); // Parse the entered value as an integer
    if (!isNaN(enteredValue) && enteredValue >= 0) {
      setMinRating(enteredValue);
    }
  }

  return (
    <>
      <Navbar />

      <div className="container mt-[25%] md:mt-[15%]  w-screen flex justify-center">
        <div className="flex justify-between w-[95%]  pl-10 pr-6">
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            className="border-[1px] px-2 rounded-md w-[40%]"
            placeholder="Search restaurants..."
          />
          <div className="flex items-center">
            <h1 className="mr-2">Minimum Rating :</h1>
            <input
              type="number"
              value={minRating}
              onChange={handleRatingChange}
              className="border-[1px] py-2 w-20 rounded-md"
            />
          </div>
        </div>
      </div>

      <MainComponent searchValue={searchValue} minRating={minRating} />
    </>
  );
}

export default App;
