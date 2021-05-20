import { useState } from "react";
import {interval} from 'rxjs';
import {} from 'rxjs/operators';
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Timearea from "./components/TImerarea/Timearea";
import getFullTime from './services/getFullTime';

  let timerInterval$;
  let subscription;

function App() {
  const [timerState, setTimerState] = useState({
    time: {
      totalSeconds: 0,
      seconds: '00',
      minutes: '00',
      hours: '00',
    },
    currentState: "stopped", //'runned', 'paused'
  });

  const startTimer = () => {      
    timerInterval$ = interval(1000);
    subscription = timerInterval$.subscribe({
      next: (v) => {
        console.log('V:' + v);  
        const initialValue = timerState.time.totalSeconds;
        const newState = JSON.parse(JSON.stringify(timerState));
        newState.time = getFullTime(v + 1 + initialValue);      
        setTimerState(newState);
      },
      error: err => console.log(err),
      complete: () => console.log('complete')
    }); 
    setTimerState({
      ...timerState,
      currentState: 'runned'
    });
  }

  const pauseTimer = () => {
    subscription.unsubscribe(); 
    setTimerState({
      ...timerState,
      currentState: 'paused'
    });   
  };

  const stopTimer = () => {    
    subscription.unsubscribe();    
    const newState = JSON.parse(JSON.stringify(timerState));
    newState.time = getFullTime(0);
    setTimerState(newState);
    setTimerState({
      ...timerState,
      currentState: 'stopped'
    });
  };

  const resetTimer = () => {    
    stopTimer();
    subscription = timerInterval$.subscribe({
      next: (v) => {
        console.log('V:' + v);          
        const newState = JSON.parse(JSON.stringify(timerState));
        newState.time = getFullTime(v + 1);      
        setTimerState(newState);
      },
      error: err => console.log(err),
      complete: () => console.log('complete')
    });
    setTimerState({
      ...timerState,
      currentState: 'runned'
    });
  }

  return (
    <div className="App">
      <h1>Timer</h1>
      <div className="timer__wrapper">
        <Timearea time={timerState.time} />
        <Buttons startTimer={startTimer} pauseTimer={pauseTimer} stopTimer={stopTimer} resetTimer={resetTimer} currentState={timerState.currentState} />
      </div>
    </div>
  );
}

export default App;
