import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';
import MovieCard from "../Components/MovieCard";
import ActorsServices from "../services/ActorsServices";

const ActorDetailsPage = () => {
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1); 
    const [movies, setMovies] = useState({});

    const fetchActorById = async (page = 1) => {
        try {
            const response = await ActorsServices.getActorById(id, page); 
            const { results, total_pages } = response.data;  
            setMovies(results.data.results);  
            setMaxPage(total_pages); 
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchActorById(currentPage);
     
    }, [currentPage]);

    return (
        <Container className="d-flex flex-column align-items-center">
            <div className="d-flex flex-wrap justify-content-center gap-3">
               
                    {movies.map((movie) => {
                        return <MovieCard key={movie.id} movieCard={movie.id} />;
                    })}
                    
            
            </div>

            <Pagination className="mt-5">
                {currentPage > 1 && (
                    <>
                        <Pagination.First onClick={() => setCurrentPage(1)} />
                        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
                        <Pagination.Item onClick={() => setCurrentPage(1)}>{1}</Pagination.Item>
                    </>
                )}

                {currentPage - 5 > 0 && (
                    <Pagination.Ellipsis onClick={() => setCurrentPage(currentPage - 5)} />
                )}

                {currentPage > 1 && (
                    <Pagination.Item onClick={() => setCurrentPage(currentPage - 1)}>
                        {currentPage - 1}
                    </Pagination.Item>
                )}

                <Pagination.Item active>{currentPage}</Pagination.Item>

                {currentPage + 1 < maxPage && (
                    <Pagination.Item onClick={() => setCurrentPage(currentPage + 1)}>
                        {currentPage + 1}
                    </Pagination.Item>
                )}

                {currentPage + 5 <= maxPage && (
                    <Pagination.Ellipsis onClick={() => setCurrentPage(currentPage + 5)} />
                )}

                {currentPage < maxPage && (
                    <>
                        <Pagination.Item onClick={() => setCurrentPage(maxPage)}>{maxPage}</Pagination.Item>
                        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
                        <Pagination.Last onClick={() => setCurrentPage(maxPage)} />
                    </>
                )}
            </Pagination>
        </Container>
    );
};

export default ActorDetailsPage;
