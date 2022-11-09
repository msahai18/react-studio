// TODO: create a component that displays a single bakery item

export default function BakeryItem({pname, pindex, pprice, pdescription, pimage, updateCart}){


    
    return(
        <div>{pindex} {pname.name} {pprice.price} {pdescription.description} 
        
        <img style = {{width: 400, height: "auto"}} src={pimage.image} alt ={pimage.image}/>
        <button onClick={() => updateCart(pname.name, pprice.price)}>Add to Cart</button>
        </div>
    )
        
    
        
}