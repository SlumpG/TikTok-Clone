import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from 'react-ticker'
import "./VideoFooter.css";

const VideoFooter = ({channel,discription,song}) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{discription}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />

          <Ticker mode='smooth'>
        {({ index }) => (
            <>
                <p>{song}</p>
            </>
        )}
    </Ticker>
        </div>
      </div>
      <div >
          <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
      </div>
    </div>
  );
};

export default VideoFooter;
