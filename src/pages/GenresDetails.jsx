import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import GenresServices from "../services/GenresServices";
import Pagination from 'react-bootstrap/Pagination';
import MovieCard from "../Components/MovieCard";

const GenreDetailsPage = () => {

    const {id,} = useParams();
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);

    const fetchMovieByGenreId = async () => {
        try {
            const response = await GenresServices.getMovieByGenreId(currentPage,id);
            setMovies(response.data.results);
            console.log(response.data);
            //setMaxPage(response.data.total_pages);
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant",
                  });
            },50)

        } catch (error) {
            console.error(error);
    };
    }

    useEffect(() => {
        fetchMovieByGenreId();
        console.log('test')
    }, [currentPage])

    return <Container className="d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center flex-wrap gap-4">
            {movies.map((movie) => {
                return <MovieCard movieCard={movie} key={movie.id}></MovieCard>
            })}
        </div>



    <Pagination className="mt-5">
        {currentPage > 1 && <>
            <Pagination.First onClick={() => { setCurrentPage(1) }} />
            <Pagination.Prev onClick={() => { setCurrentPage(currentPage - 1) }} />
            <Pagination.Item onClick={() => { setCurrentPage(1) }}>{1}</Pagination.Item>

        </>}

        {currentPage - 5 > 0 && <>
            <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage - 5) }} />
        </>
        }
        {(currentPage != 2 && currentPage > 1) && <>
            <Pagination.Item onClick={() => { setCurrentPage(currentPage - 1) }}>{currentPage - 1}</Pagination.Item>
        </>}

        <Pagination.Item active>{currentPage}</Pagination.Item>


        {(currentPage +1 < maxPage) && <> <Pagination.Item onClick={() => { setCurrentPage(currentPage + 1) }}>{currentPage + 1}</Pagination.Item>
        </>}

        {(currentPage + 5 <= maxPage ) && <> <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage + 5) }} />
            </>
        }
        {currentPage < maxPage && <>
            <Pagination.Item onClick={() => { setCurrentPage(maxPage) }}>{maxPage}</Pagination.Item>
            <Pagination.Next onClick={() => { setCurrentPage(currentPage + 1) }} />
            <Pagination.Last onClick={() => { setCurrentPage(maxPage) }} />
        </>}

    </Pagination>
</Container>;
}

export default GenreDetailsPage;