import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./constantes/GlobalStyle";
import PageCadastro from "./page cadastro/PageCadastro";

import PageLogin from "./Page login/PageLogin";
import UserContext from "./providers/user";

function App() {
  const [user, setUser] = useState({})
  const [token, setToken] = useState("")

  function tokenLocal (toke) {
  
    if (token.length === 0) {
      setToken(toke)
      localStorage.setItem("token", JSON.stringify(toke))
    }
  }

  function userLocal (usuario) {
    
    if (user.length === 0) {
      setUser(usuario)
      localStorage.setItem("user", JSON.stringify(usuario))
    }
  }

  return (
    <UserContext.Provider value={{user, token, tokenLocal, userLocal}}>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<PageLogin/>}/>
            <Route path="/sign-up" element={<PageCadastro/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
