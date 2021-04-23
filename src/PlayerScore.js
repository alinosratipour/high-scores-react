import React from "react";

const PlayerScore = (props) =>{
    return(
   <div>
     {props.Score.map(item =>{
         const {name,scores:{n,s}} = item;
         return(
            <table>
              <th>{name}</th> 
               <tr>
                   <td>{s}</td>
                   <td></td>
               </tr>
            </table>
         );
     })}
   </div>


    );
}

export default PlayerScore;