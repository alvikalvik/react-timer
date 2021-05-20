import styled from 'styled-components';

const TimeareaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  width: 500px;
  border: 2px solid #000000;
`;

const TimeareaElement = styled.div`
  width: 150px;
  border: 1px solid #444444;
  h3 {
    margin: 10px 20px;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid #444444;
  }
  span {
    display: block;
    margin: 10px 20px;
    padding: 10px 0;
    font-size: 36px;
    font-weight: 700;    
  }
`;

const Timearea = ({ time: {seconds, minutes, hours} }) => {  
  return (    
      <TimeareaWrapper>
        <TimeareaElement>
          <h3 className="timearea__element-title">Hours</h3>
          <span className="timearea__indicator timearea__indicator_hours">{hours}</span>
        </TimeareaElement>
        <TimeareaElement>
          <h3 className="timearea__element-title">Minutes</h3>
          <span className="timearea__indicator timearea__indicator_minutes">{minutes}</span>
        </TimeareaElement>
        <TimeareaElement>
          <h3 className="timearea__element-title">Seconds</h3>
          <span className="timearea__indicator timearea__indicator_seconds">{seconds}</span>
        </TimeareaElement>
      </TimeareaWrapper>    
  );
};

export default Timearea;
