import React from "react";
import { ImSad,ImSmile } from "react-icons/im";
const WorldWideTable = ({AllScores}) => {
    let newArray = [];

                    
                    
    AllScores.map(({ name, scores }) => {
        return (
            scores.map(({ n, s }) => {
             const result = {Country:name,playerScore:s,playerName:n}  
                newArray.splice(newArray.length,0,result);
                return newArray;
            })
        );
    });
    let sortNewArray = newArray.sort((a, b) => {
        return b.playerScore - a.playerScore;
    });
    return (
        <div className="worldTableWrapper">
            <h1>World Ranking Table</h1>
            <table className="worldTable">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Country Name</th>
                        <th scope="col">Player Name</th>
                        <th scope="col">Player Score</th>
                    </tr>
                </thead>
                <tbody>
                    {sortNewArray.map(({ Country, playerScore, playerName }, index) => {
                        return (
                            
                            <tr key={index} className="te" >
                                <th scope="row">{index + 1}</th>
                                <td>{Country}</td>
                                <td>{playerName}</td>
                                <td>{playerScore <= 5000 ?  <ImSad style={{ color:"red" }} /> : <ImSmile style={{ color:"green" }}/> }
                                {playerScore}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
           
        </div>
    );
};

export default WorldWideTable