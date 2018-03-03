
import React, {Component} from 'react';
import "../cards.css";

class LondonTourist extends Component {

	state = {
		restaurants: [
	      {"name": "The Golden Chippy",
	      "url": "http://thegoldenchippy.com/",
	      "photo": "https://i.imgur.com/V81ynUx.jpg"},
	      {"name": "The Goring Dining Room",
	      "url": "http://www.thegoring.com/food-drink/the-dining-room/",
	      "photo": "https://i.imgur.com/20gSOoj.jpg"},
	      {"name": "The Wilmington, Public House & Dining",
	      "url": "http://www.wilmingtonclerkenwell.com/",
	      "photo": "https://i.imgur.com/2RYMRAv.jpg"}
	    ],
	    landmarks: [
	      {"name": "Big Ben",
	      "url": "https://www.visitlondon.com/things-to-do/sightseeing/london-attraction/big-ben",
	      "photo": "https://i.imgur.com/HTjTs33.jpg"},
	      {"name": "Buckingham Palace",
	      "url": "https://www.royal.uk/buckingham-palace",
	      "photo": "https://i.imgur.com/qT18wx6.jpg"},
	      {"name": "Westminster Abbey",
	      "url": "http://www.westminster-abbey.org/",
	      "photo": "https://i.imgur.com/nWlBmR5.jpg"}
	    ],
	    activities: [
	      {"name": "Sea Life London Aquarium",
	      "url": "http://www.visitsealife.com/london/",
	      "photo": "https://i.imgur.com/8HV3VZ5.jpg"},
	      {"name": "Royal Observatory",
	      "url": "https://www.rmg.co.uk/royal-observatory",
	      "photo": "https://i.imgur.com/ENjgo2E.jpg"},
	      {"name": "Royal Opera House",
	      "url": "http://www.roh.org.uk/",
	      "photo": "https://i.imgur.com/308lKHt.jpg"}
	    ]
	}

	render() {
	    return (
	      <div className="card">
		    <h1>Restaurants</h1>
			    <div className="rest">		      	
		      		<div id="rest1">
				        <img className="photo" alt={this.state.restaurants[0].name} src={this.state.restaurants[0].photo}/>
				        <h2><a href={this.state.restaurants[0].url} target="blank">{this.state.restaurants[0].name}</a></h2>
				    </div>
				    <div id="rest2">		        
				        <img className="photo" alt={this.state.restaurants[1].name} src={this.state.restaurants[1].photo}/>
				        <h2><a href={this.state.restaurants[1].url} target="blank">{this.state.restaurants[1].name}</a></h2>		        
				    </div>
				    <div id="rest3">			        
				        <img className="photo" alt={this.state.restaurants[2].name} src={this.state.restaurants[2].photo}/>
				        <h2><a href={this.state.restaurants[2].url} target="blank">{this.state.restaurants[2].name}</a></h2>			        
				    </div>
			    </div>

		    <h1>Landmarks</h1>
			    <div className="land">
			    	<div id="land1">
				        <img className="photo" alt={this.state.landmarks[0].name} src={this.state.landmarks[0].photo}/>
				        <h2><a href={this.state.landmarks[0].url} target="blank">{this.state.landmarks[0].name}</a></h2>
				    </div>
				    <div id="land2">
				        <img className="photo" alt={this.state.landmarks[1].name} src={this.state.landmarks[1].photo}/>
				        <h2><a href={this.state.landmarks[1].url} target="blank">{this.state.landmarks[1].name}</a></h2>
				    </div>
				    <div id="land3">		        
				        <img className="photo" alt={this.state.landmarks[2].name} src={this.state.landmarks[2].photo}/>
				        <h2><a href={this.state.landmarks[2].url} target="blank">{this.state.landmarks[2].name}</a></h2>
				    </div>
			    </div>

			<h1>Activities</h1>
		    	<div className="act">
		    		<div id="act1">		      	
				        <img className="photo" alt={this.state.activities[0].name} src={this.state.activities[0].photo}/>
				        <h2><a href={this.state.activities[0].url} target="blank">{this.state.activities[0].name}</a></h2>
				    </div>
				    <div id="act2">
				        <img className="photo" alt={this.state.activities[1].name} src={this.state.activities[1].photo}/>
				        <h2><a href={this.state.activities[1].url} target="blank">{this.state.activities[1].name}</a></h2>
				    </div>
				    <div id="act3">
				        <img className="photo" alt={this.state.activities[2].name} src={this.state.activities[2].photo}/>
				        <h2><a href={this.state.activities[2].url} target="blank">{this.state.activities[2].name}</a></h2>
				    </div>
		    	</div>

	      </div>
	    );
	}


  
}

export default LondonTourist;