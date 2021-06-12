import React, { useState } from 'react';


const CarrinhoContext = React.createContext([{}, () => {}]);

const CarrinhoProvider = (props) => {
    const [carrinho, setCarrinho] = useState({});
    return (
      <CarrinhoContext.Provider value={[carrinho, setCarrinho]}>
        {props.children}
      </CarrinhoContext.Provider>
    )
  }

  export {CarrinhoProvider, CarrinhoContext}