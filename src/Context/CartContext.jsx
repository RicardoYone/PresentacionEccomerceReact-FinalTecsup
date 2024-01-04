import { createContext } from "react";
import { useState, useEffect } from "react";

export const CartContext=createContext(); 
  


export const CartProvider = ({children}) => {
  const[cartItem, setCartItems]=useState(()=>{
     try {
        const storage = localStorage.getItem("carro");
        return storage ? JSON.parse(storage):[]
     } catch (error) {
        return [];
     }
  });

useEffect(()=>{
    localStorage.setItem("carro",JSON.stringify(cartItem));    
},[cartItem])

  /* obetenemos como parametro el producto=product */
  const addItemToCart=(product)=>{
  /* verificamos si el producto existe, de ser asi inCart tomara el valor, caso contrario undefine*/
    const inCart= cartItem.find(
        (productInCart)=>productInCart.id === product.id
    )
    /* Verificamos si inCart tiene valores */
    if(inCart){
      /* actualizamos la variable estado */
        setCartItems(
            cartItem.map((productInCart)=>{
                if (productInCart.id === product.id) {
                 return { ...inCart, cantidad: inCart.cantidad + 1 } 
                  
                } else{
                   return productInCart
                }
            })
        )
    }
    /* caso contrario si inCart es undefine, aplicamos spread operator para clonar carItem agregamos el nuevo produvto con la cantidad igual a 1   */ 
    else{
        setCartItems([...cartItem,{...product, cantidad:1}])
    }
  };

  const deleteItemToCart=(product)=>{
    console.log(product)
    /* verificamos si el producto existe, de ser asi inCart tomara el valor, caso contrario undefine*/
      const inCart= cartItem.find(
          (productInCart)=>productInCart.id === product.id
      )
      /*  */
      if(inCart.cantidad===1){
        /* */
         setCartItems(
          cartItem.filter((productInCart)=>productInCart.id !== product.id)
         )
      }
      /* */ 
      else{
        setCartItems(
          cartItem.map((productInCart)=>{
              if (productInCart.id === product.id) {
               return { ...inCart, cantidad: inCart.cantidad - 1 } 
                
              } else{
                 return productInCart
              }
          })
      )
      }
    };

    const deleteProductToCart=(product)=>{
      console.log(product)
      /* verificamos si el producto existe, de ser asi inCart tomara el valor, caso contrario undefine*/
        const inCart= cartItem.find(
            (productInCart)=>productInCart.id === product.id
        )
        /*  */
             setCartItems(
            cartItem.filter((productInCart)=>productInCart.id !== product.id)
           )
        };
        
            

  return (
    <CartContext.Provider value={{cartItem,addItemToCart,deleteItemToCart, deleteProductToCart}}>
        {children}
    </CartContext.Provider>
  );
}
