import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialSeconds, onTimerEnd }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      onTimerEnd && onTimerEnd();
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [seconds, onTimerEnd]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return <div>Countdown: {formatTime(seconds)}</div>;
};

export default CountdownTimer;
