import React from "react";
import Score from "./Score";
import PlayerScore from "./PlayerScore";
import WorldWideTable from "./WorldWideTable"
const HighScoreTable = () =>{
    return(
   <div  >
   
   <WorldWideTable AllScores = {Score}/>
   <h1>Hight Score per Countries</h1>
       <PlayerScore Score={Score}/>
       
   </div>


    );
}

export default HighScoreTable;