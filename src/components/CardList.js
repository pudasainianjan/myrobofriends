import React from 'react';
import Card from './Card';
 

const CardList = ({ robots }) => {

    // if(true){
    //     throw new Error('Nooooo! Error Occured');  //for error throwing and checking
    // }
     
    return(
        <div>
             {
                 robots.map((user, i) =>{
                    return  (
                    <Card 
                    key={robots[i].id} 
                    //key is something that doesnt change and key is used because one of them gets deleted then it wont affect entire by updating all instead it deletes key associated one
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}/>  
                    );  
                })
             }
        </div>
    );
}

export default CardList;