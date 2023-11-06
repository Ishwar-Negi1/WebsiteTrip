import './Footer.css';
import { Button } from '@mui/material';


const Footer=()=>{

    return (
        <>
        <div className='footerBar'>
        <div className='left'>
        <h1>Your Travel Journey Starts Here</h1>
        <p style={{padding:'20px 10px'}}>sign up and we will send the best deal to you</p>
        </div>
        <div className='right'>
        <input type='text' placeholder='Your Email' className='footerText'/>
        <Button className="subscribe" variant="contained">Subscribe</Button>
        </div>
        </div>
        </>
    )
}

export default Footer;