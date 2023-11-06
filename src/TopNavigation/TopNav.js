import React from'react';
import './TopNav.css';

const TopNav=()=>{
    return(
    
    <div class="header">
	<a href="#" class="logo"><i class="fas fa-shopping-basket"></i>TripWeb</a>
	<div class="navbar">
		<a href="#">Home</a>
		<a href="#">Categories</a>
		<a href="#">Designations</a>
		<a href="#">Blog</a>
		<a href="#">Pages</a>
		<a href="#">Dashboard</a>
        <a href="#">Contact</a>
	</div>
	<div class="icons">
		<div className='btn' >Become an Expert</div>
		<div className="btn" >SignIn/Register</div> 
	</div>
    
    </div>
        
        )
}
export default TopNav;
