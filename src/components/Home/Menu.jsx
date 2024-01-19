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
    image: "https://cdn1-production-images-kly.akamaized.net/QrJvNlZ1AyIV2CEa45c_NGDObbk=/500x281/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/906174/original/066358100_1434828388-5420_resep_sehat_ayam_suwir_bumbu_cabai.jpg",
    name: "Ayam Suwir Pedas",
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
    image: "https://cdn1-production-images-kly.akamaized.net/dNiNYC20bw7W_eOfJxt4KeoOy3A=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3308719/original/071163200_1606455113-rice-meat-3624533_1920.jpg",
    name: "Tempe Ketan Pedas",
    price: 25000,
    quantity: 1,
    notes: ""
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFnoP9Ffpx3UGl2fDMb44ZFidje0gTYajR5jEWqFMoqnyONupG8bElOEXzogq9_A3Z8k&usqp=CAU",
    name: "Seblak",
    price: 12500,
    quantity: 1,
    notes: ""
  },
  {
    id: 5,
    image: "https://img.okezone.com/content/2019/11/28/298/2135380/3-menu-makanan-pedas-yang-bikin-ngiler-Uu0FbTMwjB.jpg",
    name: "Ayam Geprek",
    price: 15000,
    quantity: 1,
    notes: ""
  },
  {
    id: 6,
    image: "https://asset-2.tstatic.net/kupang/foto/bank/images/makanan-pedas.jpg",
    name: "Ikan Bawal Pedas",
    price: 15000,
    quantity: 1,
    notes: ""
  },
  {
    id: 7,
    image: "https://o-cdn-cas.sirclocdn.com/parenting/images/makanan-pedas-berkuah.width-800.format-webp.webp",
    name: "Kuah Puedesse Cok",
    price: 20000,
    quantity: 1,
    notes: ""
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXeTlR9UcyFC4jSohW9xw_bERMu_lUHrTV9vNibKDkqmrTtQ1Hc5UvhWHYvAsDlt_maVU&usqp=CAU",
    name: "Udang Kuah Santan Pedas",
    price: 25000,
    quantity: 1,
    notes: ""
  },
  {
    id: 9,
    image: "https://cdn.yummy.co.id/content-images/images/20230512/78eccbc3137d88a112e2b33b3d53910c.jpg?x-oss-process=image/format,webp",
    name: "Udang Non Santan Pedas",
    price: 27500,
    quantity: 1,
    notes: ""
  },
  {
    id: 10,
    image: "https://jelajahmakanan.com/wp-content/uploads/2023/06/ezgif.com-gif-maker-1-840x473.webp",
    name: "Udang Potong Kuah",
    price: 25000,
    quantity: 1,
    notes: ""
  },
  {
    id: 11,
    image: "https://www.gosipgarut.id/read/media/files/2019/03/05-07-26-tumis-kangkung-terasi-bisa-jadi-menu-makan-malam-nanti-xio-700x400.jpg",
    name: "Cah Kangkung",
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
          style={{ width: '890px', marginBottom:'20px', marginLeft:'50px', flexDirection:'' }}
        />
      </div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginLeft:"50px" }}>
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
            <Button gradientDuoTone="pinkToOrange" size="sm"
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