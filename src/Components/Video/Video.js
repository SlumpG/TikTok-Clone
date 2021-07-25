import React, { useRef, useState } from 'react'
import VideoSideBar from '../VideoSideBar/VideoSideBar'
import VideoFooter from '../VideoFooter/VideoFooter'
import './Video.css'


const Video = () => {

    const [playing,setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () =>{
        
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className='video'>
            <video
            onClick={handleVideoPress}
            ref={videoRef}
            className='videoPlayer'
            loop
            src='https://youtu.be/ZT3ycBPyUZU'
            >
            </video>

            <VideoSideBar />
            <VideoFooter />
        </div>
    )
}

export default Video
