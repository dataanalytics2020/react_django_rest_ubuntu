import React,{useState} from 'react'

const Basic1 = (props) => {

    

    const [product,setProducts] = useState({name:'',price:''})


    return (
        <>  
           <form>
                <input type='text' value={product.name}
                onChange={evt =>setProducts({...product, name: evt.target.value})}/>
                
                <input type='text' value={product.price}
                onChange={evt =>setProducts({...product, price: evt.target.value})}/>
           </form>
            <h3>her name is {product.name}</h3>
            <h3>product price is {product.price}</h3>
        </>
    )
}

export default Basic1