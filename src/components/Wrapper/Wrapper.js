import React from "react";
import "./Wrapper.css";
import LondonLaidBack from "../Cards/London/LondonLaidBack";
import LondonLaidBackPhoto from "../Cards/London/LondonLaidBackPhoto";
import LondonAdventurous from "../Cards/London/LondonAdventurous";
import LondonAdventurousPhoto from "../Cards/London/LondonAdventurousPhoto";
import LondonTourist from "../Cards/London/LondonTourist";
import LondonTouristPhoto from "../Cards/London/LondonTourist";

const Wrapper = props =>
<div className="wrapper">
	<LondonAdventurousPhoto/>
	<h5>Itinerary</h5>
	<LondonAdventurous/>
</div>;

export default Wrapper;
