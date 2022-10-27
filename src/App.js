import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./constantes/GlobalStyle";
import PageCadastro from "./page cadastro/PageCadastro";
import PageIncricao from "./page inscrição/PageIncricao";

import PageLogin from "./Page login/PageLogin";
import PagePlano from "./page plano/PagePlano";
import UserContext from "./providers/user";

function App() {

// lembrar de fazer context do user

  return (
    <UserContext.Provider >
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<PageLogin/>}/>
            <Route path="/sign-up" element={<PageCadastro/>}/>
            <Route path="/subscriptions" element={<PageIncricao/>}/>
            <Route path="/subscriptions/:idPlano" element={<PagePlano/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
