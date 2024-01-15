//kotakan menu, yang utama jadi semua menu dijadiin satu

import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import { Button } from 'flowbite-react';
export const pizzas = [
  {
    id: 0,
    image: "https://cdn0-production-images-kly.akamaized.net/1ppKFIyQNOBr7xaocNdtlsyS5S0=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2578040/original/014761800_1546575969-resep-spicy-chicken-wings-sederhana.jpg",
    name: "Ayam Nampol",
    price: 30000,
    quantity: 1,
    notes: ""
  },
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Teri Kacang Pedas",
    price: 27500,
    quantity: 1,
    notes: ""
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Nasgor",
    price: 35000,
    quantity: 1,
    notes: ""
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Nasgor",
    price: 25000,
    quantity: 1,
    notes: ""
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Nasgor",
    price: 12500,
    quantity: 1,
    notes: ""
  },
  {
    id: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Nasgor",
    price: 10000,
    quantity: 1,
    notes: ""
  },
  {
    id: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Nasgor",
    price: 15000,
    quantity: 1,
    notes: ""
  },
  {
    id: 7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Nasgor",
    price: 20000,
    quantity: 1,
    notes: ""
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Nasgor",
    price: 25000,
    quantity: 1,
    notes: ""
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Nasgor",
    price: 27500,
    quantity: 1,
    notes: ""
  },
  {
    id: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Ice Cream",
    price: 25000,
    quantity: 1,
    notes: ""
  },
  {
    id: 11,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YTF3ddpYtNZPI_OCeNk7Y5dYa_UvF9zFja-MG2Ju0Rnj_lTSQ-j15zV0ngcftlisApo&usqp=CAU",
    name: "Nasgor",
    price: 18000,
    quantity: 1,
    notes: ""
  }
]



//fungsi yang akan reducer tangkep sebagai action

function Menu({ dispatch }) {
  const [notes, setNotes] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(pizzas);

  const handleAddToCart = (pizza) => {
    dispatch({
      type: 'add_to_cart',
      payload: { ...pizza, notes: notes[pizza.id] || '' },
    });
    setNotes({ ...notes, [pizza.id]: '' });
  };

  const handleNotesChange = (event, id) => {
    setNotes({ ...notes, [id]: event.target.value });
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const results = pizzas.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(searchTerm === '' ? pizzas : results);
  };

  return (
    <div className="w-full">
      <div className="search-order mr-[25px] my-2">
        <input
          type="text"
          placeholder="Search for an order"
          value={searchTerm}
          onChange={handleSearch}
          className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          style={{ width: '200px', marginBottom:'30px', marginLeft:'30px', flexDirection:'' }}
        />
      </div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginLeft:"30px" }}>
        {searchResults.map((pizza) => (
          <div
            className="p-[10px] mb-[20px] rounded-lg h-[300px] shadow-lg"
            key={pizza.id}
          >
            <MenuItem
              key={pizza.id}
              name={pizza.name}
              image={pizza.image}
              price={pizza.price}
            />
            <input
              value={notes[pizza.id] || ''}
              onChange={(e) => handleNotesChange(e, pizza.id)}
              type="text"
              placeholder="Add notes..."
              style={{ marginBottom: '10px', width: '100%' }}
              className="form-control border-2 border-gray-100 p-2 rounded-lg"
            />
            <Button gradientDuoTone="tealToLime" size="sm"
              onClick={() => handleAddToCart(pizza)}
              color="blue"
              className="form-control border-2 border-gray-100 p-2 rounded-lg" 
              style={{ width: '100%' }} 
            >
              Add To Cart
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Menu;