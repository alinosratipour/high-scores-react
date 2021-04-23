import React from "react";
import allCountryScores from "./Score.js";
import PlayerScore from "./PlayerScore";

const HighScoreTable = () =>{
    return(
   <div>
   <h1>Hight Score per Countries</h1>
       <PlayerScore Score={allCountryScores}/>
   </div>


    );
}

export default HighScoreTable;