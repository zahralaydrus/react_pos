//home ini menu awalnya untuk panggil komponen

import { useReducer, useState } from "react";
import Cart from "./Cart";
import Menu, { pizzas } from "./Menu";
import { cartReducer, initialState } from "../../cartReducer";
import SearchOrder from "./SearchOrder";


function Home() {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [seacrhValue, setSeacrhValue] = useState('');
    return (
      <div className="row">
      <div className="col" 
     style={{ marginLeft: "30px", marginBottom: "10px", width: "100%",}}>
          {/* <SearchOrder setSeacrhValue={setSeacrhValue}> </SearchOrder> */}
          </div>
          <div className="col" style={{display: "flex", gap: "10px" }}>
            <Menu dispatch={dispatch} seacrhValue={seacrhValue} style={{width: "100%"}}  />
            <Cart dispatch={dispatch} carts={state.carts} />
            </div>
        </div>
    );
}
export default Home;