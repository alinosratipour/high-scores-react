
import React from "react";


const PlayerScore = (props) =>{
    return(
   <div >
  
     {props.Score.sort((a, b) => a.name.localeCompare(b.name)).map(item =>{
         const {name,scores} = item;
         return(
            <div>
            <table>
                <th></th>
                <tr>
                  <td>Hight Score: </td> 
                  <td><h3>{name}</h3></td> 
                </tr>

            </table>
           
              
              
                   <div>{scores.map(score=>{
                       const { n, s } = score;
                    return(
                    <table>
                    <th></th>

                        <td>{n}</td>
                        <td>{s}</td> 
                    </table>
                   
                    ); 

                   })}</div>
                  
            
            </div>
         );
     })}
   </div>


    );
}

export default PlayerScore;