
import React from "react";


const PlayerScore = (props) =>{
    return(
   <div className="ScoreWrapper">
  
     {props.Score.sort((a, b) => a.name.localeCompare(b.name)).map((item,index) =>{
         const {name,scores} = item;
         return(
            <div key={index} className="ScoreTable">
            <table className="countryRow">
              <thead></thead> 
               <tbody> 
                <tr className="country">
                  <td className="country">Hight Score: </td> 
                  <td><h3 className="country">{name}</h3></td> 
                </tr>
               </tbody>
            </table>
           
              
              
                   <div>{scores.sort((a, b) =>
                    b.s -a.s).map((score,index)=>{
                       const { n, s } = score;
                    return(
                    <div  key ={index} className="scoreAndName">
                   
                     
                        <div className="personName">{n}</div>
                        <div className="personScore">{s}</div> 
                       
                    </div>
                   
                    ); 

                   })}</div>
                  
            
            </div>
         );
     })}
   </div>


    );
}

export default PlayerScore;