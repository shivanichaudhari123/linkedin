import React, { useState } from 'react';
import YouTube from 'react-youtube';
const Vedioutube=()=>{
    //const [start,setStart]=useState("");

    // const opts = {
    //     height: '390',
    //     width: '640',
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 1,
    //     },
    //   };
    return(
        <div>
            <p>This is youtube vedio</p>
            <input type="text" placeholder="enter utubelink" />

        </div>
    );
}
export default Vedioutube;