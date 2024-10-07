
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import GenresPage from './pages/GenresPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ActorsPage from './pages/ActorsPage';
import MovieDetailsPage from './pages/MoviesDetails';
import GenreDetailsPage from './pages/GenresDetails';
import ActorDetailsPage from './pages/ActorDetail';




function App() {
  

  return <>
     

<BrowserRouter >
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/genre' element={<GenresPage></GenresPage>} ></Route>
      <Route path='/actors' element={<ActorsPage></ActorsPage>} ></Route> 
      <Route path='/actor/:id' element={<ActorDetailsPage></ActorDetailsPage>} ></Route>
      <Route path='/movie/:id' element={<MovieDetailsPage></MovieDetailsPage>} ></Route>
      <Route path='/genre/:id' element={<GenreDetailsPage></GenreDetailsPage>} ></Route>
    </Routes>
</BrowserRouter>

    </>
  
}

export default App
