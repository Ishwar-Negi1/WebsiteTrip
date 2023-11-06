import { Button } from '@mui/material';
import './Card.css';
const Card = ({ img, title,title1,title2,star, reviews, category,duration,cancellation,location, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
        <div className='firstRow'>
        <div>{duration}<span>+ hours</span> &nbsp; <span>Full-day</span> &nbsp;{category}</div><div className='starRow'>{star} {star} {star} {star}</div>
        </div>
        <div className="secondRow">
        <div className='card-title'><h2>{title}</h2><br/><h2>{title1}</h2><br/><h2>{title2}</h2></div>
        <div className='reviews'>{reviews}</div>
        </div>
        <div className='thirdRow'>
        <div className='location'>{location}</div>
        <div className="price"><span>US$</span>{newPrice}</div>
        </div>
        <div className="fourthRow">
        <p style={{fontWeight:'bold'}}>Taking safety measures</p>
        <div className='perAdult'>per adult</div>
        </div>
        <div className='fifthRow'>
        <div className='cancel'>{cancellation}</div>
        <Button variant="contained">View Details</Button>
        </div>
          
          
          
          <section className="card-price">
            
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
