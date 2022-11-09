import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  
  const addToCart = (itemName, itemPrice) => {
    setCart([...cart, itemName])
    setPrice(price + itemPrice)
  };
 

  return (
    <div className="App">
      <h1>Michelle's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components

        <BakeryItem pindex = {index} pname ={item}  pprice = {item} pdescription = {item} pimage = {item} updateCart = {addToCart}/> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {cart} {price}

        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
