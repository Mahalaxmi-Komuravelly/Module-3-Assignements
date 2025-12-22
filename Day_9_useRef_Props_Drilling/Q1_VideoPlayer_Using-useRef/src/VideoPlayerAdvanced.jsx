import { useRef, useState } from "react";
function VideoPlayerAdvanced(){

    

    
    const [videos] = useState(["https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"]);

    const [currentVideoIndex, setCurrentVideoIndex] =useState(0);
  
    const videoRef = useRef(null);
  
    const handlePrevious = () => {
    
    if(currentVideoIndex === 0) return;
    setCurrentVideoIndex(prevIndex=>prevIndex-1);
    
  }

  const handleNext = () => {
    if(currentVideoIndex === videos.length-1) return;
    setCurrentVideoIndex(prevIndex=>prevIndex+1);
    
  }
  
    
    const handlePlay = () =>{
        videoRef.current.play();
    }


    const handlePause = () =>{
        videoRef.current.pause();
    }


    const handleForward = () =>{
        videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 5 , videoRef.current.duration);
    }

    const handleRewind = () =>{
        videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 5 , 0);
    }
    return (
        <div>
            <button className="changevideo" onClick={handlePrevious}>⏮ Previous</button>
            
            <video src={videos[currentVideoIndex]} ref={videoRef}/>
            
            <button className="changevideo" onClick={handleNext}>⏭ Next</button>
            <div className="btns">
                <button onClick={handleRewind}>⏪ Rewind</button>
                <button onClick={handlePlay}>▶️ Play</button>
                <button onClick={handlePause}>⏸ Pause</button>
                <button onClick={handleForward}>⏩ Forward</button>
            </div>
        </div>
    )
}

export default VideoPlayerAdvanced;