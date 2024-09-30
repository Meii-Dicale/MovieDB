
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import GenresPage from './pages/GenresPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';



function App() {
  

  return <>
     

<BrowserRouter >
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/genre' element={<GenresPage></GenresPage>} ></Route>
    </Routes>
</BrowserRouter>

    </>
  
}

export default App
