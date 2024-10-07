import { useEffect, useState } from 'react';
import ActorsServices from '../services/ActorsServices';
import ActorCard from '../Components/ActorCard';
import { Container } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';



const ActorsPage = () => {
    const [actors, setActors] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);
    //const [movies, setMovies] = useState([])

    const fetchActors = async() => {
        try {
            const response = await ActorsServices.getAllActors(currentPage);
            setActors(response.data.results);
            //setMovies();
            //console.log(movies);
            
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect (()=> {
        fetchActors();
        console.log("test")
    }, [currentPage])
    return <Container className="d-flex flex-column align-items-center">
    
    <div className='d-flex flex-wrap justify-content-center gap-3'>
    {actors.map((actor)=> {
        
        return <ActorCard movies={actor.known_for} actorCard={actor}key={actor.id}></ActorCard>
        
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
 
export default ActorsPage;