import { Outlet , useNavigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { useEffect } from "react";

function App() {
  const navigate = useNavigate() ; 
  useEffect(()=>{
    navigate("/mainPage") ; 
  } , [])
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
