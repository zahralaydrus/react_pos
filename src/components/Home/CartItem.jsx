// CartItem.jsx
function CartItem({ name, price, image, notes }) {
    return (
 
      <li style={{ listStyle: "none", display: "flex", width: "150px", padding: "10px" }}>
        <div style={{ width: "50px", height: "50px", marginRight: "10px", overflow: "hidden" }}>
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <h1>{name}</h1>
          <span>{price}</span>
          <p>{notes}</p>
        </div>
      </li>
    );
  }
  
  export default CartItem;
  