import React, { useState } from 'react';


const ProdutoContext = React.createContext([{}, () => {}]);

const ProdutoProvider = (props) => {
    const [produto, setProduto] = useState({});
    return (
      <ProdutoContext.Provider value={[produto, setProduto]}>
        {props.children}
      </ProdutoContext.Provider>
    )
  }

  export {ProdutoProvider, ProdutoContext}