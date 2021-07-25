
import './App.css';
import Video from './Components/Video/Video';

function App() {
  return (
    <div className="app">
    <div className="app_videos">

      <Video color={'greenyellow'} channel={'user1'} discription={'beastUser1 mode'} song={'Kendrik Lamar - YAK YAK YAK'} likes={485} messages={321} shares={55} />
      <Video color={'red'} channel={'user2'} discription={'beastUser2 mode'} song={'J Cole - G.O.D'} likes={925} messages={351} shares={5} />
    </div>
    </div>
  );
}

export default App;
