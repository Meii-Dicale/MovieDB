import { useParams } from "react-router-dom";
import MoviesServices from "../services/MoviesServices";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const MovieDetailsPage = () => {

    const {id} = useParams();
    const [movie, setMovie]= useState({});
    

    const fetchMovieById = async () => {
        try {
            const response = await MoviesServices.getMovieById(id);
            setMovie(response.data);
            console.log(response.data);

        } catch (error) {
            console.error(error);
    
    };
    }

    useEffect (() => {
        fetchMovieById();
        console.log('test')
    },[])

    
    return <Container className="d-flex flex-column align-items-center">
        <h1>{movie.original_title}</h1>
        <p>Budget : {movie.budget}$</p>
        <div className="d-flex justify-content-center gap-3">
            {movie.genres && movie.genres.map((genre) => {
                return <Button variant="primary" key={genre.id} size="lg">{genre.name}</Button>
            })}
        </div>
        
    </Container>;
    
}
 
export default MovieDetailsPage;