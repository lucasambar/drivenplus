import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react"

import GlobalStyle from "./constantes/GlobalStyle";
import PageCadastro from "./page cadastro/PageCadastro";
import PageIncricao from "./page inscrição/PageIncricao";

import PageLogin from "./Page login/PageLogin";
import PagePlano from "./page plano/PagePlano";
import PageHome from "./page home/PageHome";
import UserContext from "./providers/user";
import PageUser from "./page user/pageUser";

function App() {

  const [user, setUser] = useState(undefined)
  
  console.log(user)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<PageLogin/>}/>
            <Route path="/sign-up" element={<PageCadastro/>}/>
            <Route path="/subscriptions" element={<PageIncricao/>}/>
            <Route path="/subscriptions/:idPlano" element={<PagePlano/>}/>
            <Route path="/home" element={<PageHome/>}/>
            <Route path="/users/:idUser" element={<PageUser/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;


