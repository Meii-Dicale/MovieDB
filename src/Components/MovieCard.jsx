import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({movieCard}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{movieCard.title}</Card.Title>
        <Card.Text>
          {movieCard.overview}
        </Card.Text>
        <Button variant="primary">Plus d'infos</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;