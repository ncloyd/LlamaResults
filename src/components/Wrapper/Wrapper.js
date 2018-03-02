import React from "react";
import "./Wrapper.css";
import LondonLaidBack from "../Cards/London/LondonLaidBack";
import LondonLaidBackPhoto from "../Cards/London/LondonLaidBackPhoto";

const Wrapper = props =>
<div className="wrapper">
	<LondonLaidBackPhoto/>
	<h5>Itinerary</h5>
	<LondonLaidBack/>
	<button type="button" className="btn btn-primary"><h3>Save</h3></button>
</div>;

export default Wrapper;
