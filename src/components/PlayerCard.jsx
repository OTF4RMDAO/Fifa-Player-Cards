import players from '../components/mockdata/players'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './PlayerCard.css';
// console.log(players);

const PlayerCard = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {players.map((player, index) => (
        <Card key={index} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img className='imgCard' style={{ width: '350px', height: '310px'}} variant="top" src={player.imageUrl} alt={`${player.playerName}`} />
          <Card.Body>
            <Card.Title>{player.playerName}</Card.Title>
            <Card.Text>Team: <strong> {player.team} </strong></Card.Text>
            <Card.Text>Nationality: <strong> {player.nationality} </strong></Card.Text>
            <Card.Text>Jersey Number: <strong> {player.jerseyNumber} </strong></Card.Text>
            <Card.Text>Age: <strong> {player.age} </strong></Card.Text>
            <Button variant="primary">View Profile</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PlayerCard;
