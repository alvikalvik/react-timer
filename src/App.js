import { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Timearea from "./components/TImerarea/Timearea";
import getFullTime from "./services/getFullTime";

function App() {
  let interval;  
  const [timerState, setTimerState] = useState({
    time: {
      totalSeconds: 0,
      seconds: "00",
      minutes: "00",
      hours: "00",
    },
    currentState: "stopped", //'runned', 'paused'    
  });

  useEffect( () => {
    if (timerState.currentState === 'runned') {
      tic();
    }
  });

  const tic = () => {     
    interval = setTimeout( () => {
      if (timerState.currentState === 'runned') {
        setTimerState({
          ...timerState,
          time: getFullTime(timerState.time.totalSeconds + 1),              
        });
      }
    } , 1000);    
  }; 

  const startTimer = () => {     
    setTimerState({
      ...timerState,      
      currentState: "runned",        
    });
    clearInterval(interval);
  };  

  const pauseTimer = () => {    
    setTimerState({
      ...timerState,
      currentState: "paused",      
    });
    clearInterval(interval);
  };

  const stopTimer = () => {    
    setTimerState({
      ...timerState,
      time: getFullTime(0),
      currentState: "stopped",
    });
    clearInterval(interval);
  };

  const resetTimer = () => {
    setTimerState({
      ...timerState,
      time: getFullTime(0),
      currentState: "runned",
    });
    clearInterval(interval);
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      <div className="timer__wrapper">
        <Timearea time={timerState.time} />
        <Buttons
          startTimer={startTimer}
          pauseTimer={pauseTimer}
          stopTimer={stopTimer}
          resetTimer={resetTimer}
          currentState={timerState.currentState}
        />
      </div>
    </div>
  );
}

export default App;
