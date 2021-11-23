import React, { useState } from 'react';
import YouTube from 'react-youtube';
const Vedioutube=()=>{
    const opts = {
        height: '250',
        width: '350',
        borderRadius:'40px',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const onReady=(e)=> {
        e.target.pauseVideo();
      }
   
    return(
        <div>
          
            {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} /> */}
            <YouTube videoId="3eTV-o5iJMY" opts={opts} onReady={onReady} />
           
        </div>
     );
    
}
export default Vedioutube;