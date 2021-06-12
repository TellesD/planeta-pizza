import React, { useState } from 'react';


const UsuarioContext = React.createContext([{}, () => {}]);

const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = useState({});
    return (
      <UsuarioContext.Provider value={[usuario, setUsuario]}>
        {props.children}
      </UsuarioContext.Provider>
    )
  }

  export {UsuarioProvider, UsuarioContext}