const getFullTime = (totalSeconds) => {
  const addZero = (num) => {
    return num >= 0 && num < 10 ? "0" + num : num;
  };

  return {
    totalSeconds,
    seconds: addZero(totalSeconds % 60),
    minutes: addZero(Math.floor(totalSeconds / 60)),
    hours: addZero(Math.floor(totalSeconds / 60 / 60)),
  };
};

export default getFullTime;
