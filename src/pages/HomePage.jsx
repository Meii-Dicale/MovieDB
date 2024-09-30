import { useEffect, useState } from 'react';
import MoviesServices from '../services/MoviesServices';
import MovieCard from '../Components/MovieCard';

const HomePage = () => {
    const [movies, setMovies] = useState([])
    const fetchMovies = async() => {
        try {
            const response = await MoviesServices.getAllMovies();
            setMovies(response.data.results);
            console.log(response.data.results);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect (()=> {
        fetchMovies();
        console.log("test")
    }, [])
   // 
    return <>
    <h1> Accueil</h1>
    {movies.map((movie)=> {
        return <MovieCard movieCard= {movie}></MovieCard>

    })}


    
    </>;
}
 
export default HomePage;