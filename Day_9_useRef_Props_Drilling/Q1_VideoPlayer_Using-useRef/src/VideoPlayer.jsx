import { useRef } from "react";

function VideoPlayer(){
    const videoRef = useRef();

    const handlePlay = ()=>{
        videoRef.current.play();
    }

    const handlePause = ()=>{
        videoRef.current.pause();
    }

    const handleForward = ()=>{
        videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 5 , videoRef.current.duration);
    }

    const handleRewind = ()=>{
        videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 5, 0);
    }
    return(
        <>
            <video src="https://www.w3schools.com/html/mov_bbb.mp4" ref={videoRef} />
            <div>
                <button onClick={handleRewind}>⏪ Rewind</button>
                <button onClick={handlePlay}>▶️ Play</button>
                <button onClick={handlePause}>⏸ Pause</button>
                <button onClick={handleForward}>⏩ Forward</button>
            </div>   
        </>
    )
}

export default VideoPlayer;