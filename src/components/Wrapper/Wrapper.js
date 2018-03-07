import React from "react";
import "./Wrapper.css";

import LondonLaidBack from "../Cards/London/LondonLaidBack";
import LondonLaidBackPhoto from "../Cards/London/LondonLaidBackPhoto";
import LondonAdventurous from "../Cards/London/LondonAdventurous";
import LondonAdventurousPhoto from "../Cards/London/LondonAdventurousPhoto";
import LondonTourist from "../Cards/London/LondonTourist";
import LondonTouristPhoto from "../Cards/London/LondonTourist";

import ChicagoLaidBack from "../Cards/Chicago/ChicagoLaidBack";
import ChicagoLaidBackPhoto from "../Cards/Chicago/ChicagoLaidBackPhoto";
import ChicagoAdventurous from "../Cards/Chicago/ChicagoAdventurous";
import ChicagoAdventurousPhoto from "../Cards/Chicago/ChicagoAdventurousPhoto";
import ChicagoTourist from "../Cards/Chicago/ChicagoTourist";
import ChicagoTouristPhoto from "../Cards/Chicago/ChicagoTourist";

import LALaidBack from "../Cards/Los Angeles/LosAngelesLaidBack";
import LALaidBackPhoto from "../Cards/Los Angeles/LosAngelesLaidBackPhoto";
import LAAdventurous from "../Cards/Los Angeles/LosAngelesAdventurous";
import LAAdventurousPhoto from "../Cards/Los Angeles/LosAngelesAdventurousPhoto";
import LATourist from "../Cards/Los Angeles/LosAngelesTourist";
import LATouristPhoto from "../Cards/Los Angeles/LosAngelesTouristPhoto";

import MexLaidBack from "../Cards/Mexico/MexicoLaidBack";
import MexLaidBackPhoto from "../Cards/Mexico/MexicoLaidBackPhoto";
import MexAdventurous from "../Cards/Mexico/MexicoAdventurous";
import MexAdventurousPhoto from "../Cards/Mexico/MexicoAdventurousPhoto";
import MexTourist from "../Cards/Mexico/MexicoTourist";
import MexTouristPhoto from "../Cards/Mexico/MexicoTouristPhoto";

import NYLaidBack from "../Cards/New York/NewYorkLaidBack";
import NYLaidBackPhoto from "../Cards/New York/NewYorkLaidBackPhoto";
import NYAdventurous from "../Cards/New York/NewYorkAdventurous";
import NYAdventurousPhoto from "../Cards/New York/NewYorkAdventurousPhoto";
import NYTourist from "../Cards/New York/NewYorkTourist";
import NYTouristPhoto from "../Cards/New York/NewYorkTouristPhoto";

import ThailandLaidBack from "../Cards/Thailand/ThailandLaidBack";
import ThailandLaidBackPhoto from "../Cards/Thailand/ThailandLaidBackPhoto";
import ThailandAdventurous from "../Cards/Thailand/ThailandAdventurous";
import ThailandAdventurousPhoto from "../Cards/Thailand/ThailandAdventurousPhoto";
import ThailandTourist from "../Cards/Thailand/ThailandTourist";
import ThailandTouristPhoto from "../Cards/Thailand/ThailandTouristPhoto";

const Wrapper = props =>

<div id="results">
	
	<a className="chevron" href="#itinerary">
        <i class="fa fa-chevron-circle-down"></i>
    </a>

	<div className="wrapper locationPhoto">
		<LAAdventurousPhoto/>
	</div>

	<div className="wrapper">
		<h5 id="itinerary">Itinerary</h5>
		<LAAdventurous/>
	</div>

	<a className="chevron" href=".locationPhoto">
        <i class="fa fa-chevron-circle-up"></i>
    </a>

</div>
;

export default Wrapper;
