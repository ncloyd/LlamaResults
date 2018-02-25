
import React, {Component} from 'react';
import "./cards.css";
import data from "../../JSON/London/londonLB.json";


class LondonLaidBack extends Component {
	letsMap(){
		let keys = Object.keys(data);
console.log(keys)
		return (
			<div>
			{keys.map(ele => data[ele].map((v,i) => 
				<div>
				<h3 key={i}>{v.name}</h3>				
				<img alt={v.name} src={v.photo}/>
				<a href={v.url}>More Info</a>
				</div>
				))}
			</div>

		)
	}

  render () {
    return (
    	<div className="card">
     {this.letsMap()}
     </div>
    )
  }
};

export default LondonLaidBack;