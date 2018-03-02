import React from "react";
import "./Wrapper.css";
import LondonLaidBack from "../Cards/London/LondonLaidBack";

const Wrapper = props =>
<div className="wrapper">
	<img className="resultPhoto" src="https://raw.githubusercontent.com/ncloyd/LlamaResults/master/images/laidbacklondon.jpg"/>
	<h5>Itinerary</h5>
	<LondonLaidBack/>
	<button type="button" className="btn btn-primary"><h3>Save</h3></button>
</div>;

export default Wrapper;
