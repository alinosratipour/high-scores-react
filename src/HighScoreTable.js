import React from "react";
import Score from "./Score";
import PlayerScore from "./PlayerScore";

const HighScoreTable = () =>{
    return(
   <div  >
   <h1>Hight Score per Countries</h1>
       <PlayerScore Score={Score}/>
   </div>


    );
}

export default HighScoreTable;