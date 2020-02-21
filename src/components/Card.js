import React from 'react';  //you re writing jsx so you must import react so program understand html inside js

const Card = ({name ,email, id}) => {  //destructuring within the parameter

    return(       //Note: only return one thing at a time for eg div below is one
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            {/* <img src={`https://robohash.org/${props.name}`}  width='200px' height='200px' />   //if no const was there write this}  */}
            <img src={`https://robohash.org/${name}`}  width='200px' height='200px' />
        <div>
        {/* generates random robot */}
        
            <h2>{name}</h2>
            <p>{email}</p>  
            {/* since this is js expression we wrap in curly bracket */}
        </div>
        </div>
    );
}

export default Card;