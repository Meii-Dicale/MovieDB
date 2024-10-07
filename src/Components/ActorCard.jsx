import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { useNavigate } from'react-router-dom';


function ActorCard ({actorCard, movies}){
  const navigate = useNavigate();
  const navigateTo = (id) => {
    navigate("/actor/"+id);
  };
    
    return  <Card style={{ width: '18rem' }} onClick={()=> {navigateTo(actorCard.id)}}>
    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+actorCard.profile_path} />
    <Card.Body>
      <Card.Title>{actorCard.name}</Card.Title>

      <Card.Text>
        {movies.slice(0, movies.length).map((movie)=> <li>{movie.title}</li>)}
      </Card.Text>

      
    </Card.Body>
  </Card>
}

export default ActorCard;