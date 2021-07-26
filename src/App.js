import axios from "./FetchData/axios";
import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Components/Video/Video";

function App() {

  const [videos,setVideos] = useState([])
useEffect(()=>{
  async function fetchPosts(){
    const response = await axios.get("/v2/posts")
    setVideos(response.data)
    return response
  }
  fetchPosts()

},[])

  return (
    <div className="app">
      <div className="app_videos">
        {
          videos?.map((video) =>{
            return <Video
            url={video.url}
            channel={video.channel}
            discription={video.discription}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
          })
        }
     
       
    
      </div>
    </div>
  );
}

export default App;
