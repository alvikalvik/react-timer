import styled from "styled-components";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  width: 500px;
  border: 2px solid #000000;
`;

const Button = styled.button`
  display: block;
  padding: 20px 40px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  background-color: #cccccc;
`;

const Buttons = ({
  startTimer,
  stopTimer,
  pauseTimer,
  resetTimer,
  currentState,
}) => {
  return (
    <ButtonsWrapper>
      {currentState === "stopped" || currentState === "paused" ? (
        <Button onClick={startTimer}>Start</Button>
      ) : (
        <Button onClick={stopTimer}>Stop</Button>
      )}
      <Button
        disabled={currentState === "stopped" || currentState === "paused"}
        onClick={pauseTimer}
      >
        Pause
      </Button>
      <Button disabled={currentState === "stopped"} onClick={resetTimer}>
        Reset
      </Button>
    </ButtonsWrapper>
  );
};

export default Buttons;
