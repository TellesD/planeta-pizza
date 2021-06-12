import React, { useState } from 'react';


const CartaoContext = React.createContext([{}, () => {}]);

const CartaoProvider = (props) => {
    const [cartao, setCartao] = useState({});
    return (
      <CartaoContext.Provider value={[cartao, setCartao]}>
        {props.children}
      </CartaoContext.Provider>
    )
  }

  export {CartaoProvider, CartaoContext}