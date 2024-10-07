import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';




function GenreCard ({genreCard}){
    const navigate = useNavigate();
    const navigateTo = (id) => {
      navigate("/genre/"+id);
    };
    
    return <Button onClick={()=> {navigateTo(genreCard.id)}}>{genreCard.name}</Button>
}

export default GenreCard;