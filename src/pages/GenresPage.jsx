import { useEffect, useState } from 'react';
import GenresServices from '../services/GenresServices';
import GenreCard from '../Components/GenreCard';



const GenresPage = () => {
    const [genres, setGenres] = useState([])
    const fetchGenres = async() => {
        try {
            const response = await GenresServices.getAllGenre();
            setGenres(response.data.genres);
            console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect (()=> {
        fetchGenres();
        console.log("test")
    }, [])
    return <>
    
    <div className='d-flex flex-wrap justify-content-center gap-3'>
    {genres.map((genre)=> {
        return <GenreCard genreCard={genre}key={genre}></GenreCard>

    })}
</div>

    
    </>
    

}
 
export default GenresPage;