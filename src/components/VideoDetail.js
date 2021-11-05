import React from 'react';

const VideoDetail = ({selectedVid})=>{
   if(!selectedVid){
       return <div>Loading...</div>
   };
    const videoSrc = `https://www.youtube.com/embed/${selectedVid.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe title="video title" src={videoSrc} />
            </div>
            <div className="ui segment">
            <div className=" ui header">
                {selectedVid.snippet.title}
            </div>
            <p>{selectedVid.snippet.description}</p>
            </div>
        </div>
        
    );
    
            
};

export default VideoDetail;