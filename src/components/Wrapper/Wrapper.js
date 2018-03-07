import React from "react";
import "./Wrapper.css";

import LondonLaidBack from "../Cards/LaidBack/LondonLaidBack";
import LondonAdventurous from "../Cards/Adventurous/LondonAdventurous";
import LondonTourist from "../Cards/Tourist/LondonTourist";

import ChicagoLaidBack from "../Cards/LaidBack/ChicagoLaidBack";
import ChicagoAdventurous from "../Cards/Adventurous/ChicagoAdventurous";
import ChicagoTourist from "../Cards/Tourist/ChicagoTourist";

import LALaidBack from "../Cards/LaidBack/LosAngelesLaidBack";
import LAAdventurous from "../Cards/Adventurous/LosAngelesAdventurous";
import LATourist from "../Cards/Tourist/LosAngelesTourist";

import MexLaidBack from "../Cards/LaidBack/MexicoLaidBack";
import MexAdventurous from "../Cards/Adventurous/MexicoAdventurous";
import MexTourist from "../Cards/Tourist/MexicoTourist";

import NYLaidBack from "../Cards/LaidBack/NewYorkLaidBack";
import NYAdventurous from "../Cards/Adventurous/NewYorkAdventurous";
import NYTourist from "../Cards/Tourist/NewYorkTourist";

import ThailandLaidBack from "../Cards/LaidBack/ThailandLaidBack";
import ThailandAdventurous from "../Cards/Adventurous/ThailandAdventurous";
import ThailandTourist from "../Cards/Tourist/ThailandTourist";

const Wrapper = props =>

<div id="results">
	
	<a className="chevron" href="#itinerary">
        <i class="fa fa-chevron-circle-down"></i>
    </a>

	<div className="wrapper">
		<NYLaidBack/>
	</div>

	<a className="chevron" href=".locationPhoto">
        <i class="fa fa-chevron-circle-up"></i>
    </a>

</div>
;

export default Wrapper;
