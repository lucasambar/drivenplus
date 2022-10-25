import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./constantes/GlobalStyle";
import PageCadastro from "./page cadastro/PageCadastro";

import PageLogin from "./Page login/PageLogin";
import UserContext from "./providers/user";

function App() {
  return (
    <UserContext.Provider>
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
