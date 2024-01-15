import React, { useState, useEffect } from 'react';

function SearchOrder({ pizzas }) {
  // const [searchTerm, setSearchTerm] = useState("");


  // useEffect(() => {
  //   setSearchResults(pizzas);
  // }, [pizzas]);

  // const handleSearch = (event) => {
  //   const searchTerm = event.target.value.toLowerCase();
  //   setSearchTerm(searchTerm);

  //   const results = pizzas.filter((pizza) =>
  //     pizza.name.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(searchTerm == '' ? pizzas : results);
  // };

  return (
    <div className="search-order mx-2">
      <input
        type="text"
        placeholder="Search for an order"
        value={searchTerm}
        onChange={handleSearch}
        className='mx-2 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <div className="search-results z-50">
        {searchResults &&
          searchResults.map((pizza) => (
            <div key={pizza.id}>
              <p>{pizza && pizza.name}</p>
              <img
                src={pizza.image}
                alt={pizza.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "150px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchOrder;