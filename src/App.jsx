import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Route1 from './Routes.jsx'
import { Route2 } from "./Routes.jsx";
import { AuthContext } from "./Context.jsx";


function App() {
  const [registered, setRegistered] = useState(false)

  
  return (
    <>
    <AuthContext.Provider value={{registered, setRegistered}}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        {
          registered ?
          Route1.map((v) => {
            return <Route key={v.id} path={v.path} element={v.element}/>
          })
          :
          Route2.map((v) => {
            return <Route key={v.id} path={v.path} element={v.element}/>
          })
        }
        
        
      </Routes>
    </BrowserRouter>
     </AuthContext.Provider>
    </>
  );
}

export default App;
