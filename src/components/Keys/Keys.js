import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const Products = [
    {id:1, name: "Laptop", brand: "Dell", qty: 1},
    {id:2, name: "Laptop", brand: "HP", qty: 1},
    {id:3, name: "Laptop", brand: "Lenovo", qty: 1},
];

const Keys = () => {
    const [items, setItem] = useState (Products);

    const changeQty = (id) => {

        const newItem = items.map((item) => 
            item.id === id? { ...item, qty : item.qty + 1 } : item
        );
        
        setItem(newItem)

        console.log(id);
    };

  return (
    <>
        <h2 className='bg-secondary text-white'>React Keys</h2>
        <p>A 'keys' is a special attribute & an unique identifire for list of element. It allow React to keep track of elements.<br/>
            keys help React identify which items have changed , are added, or are removed.
        </p>
        {items.map((product) => (
            <div className='bg-success text-white m-3' key = {product.id}>
                <h3>Product name: {product.name}</h3>
                <h4>Brand: {product.brand}</h4>
                <h5>Qty: {product.qty}</h5>
                <Button onClick={()=> changeQty(product.id)} className='bg-primary'> + </Button><br/><br/>
            </div>  
        ))}
    </>
  )
}

export default Keys
