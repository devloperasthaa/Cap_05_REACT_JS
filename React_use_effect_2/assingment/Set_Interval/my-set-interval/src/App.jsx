import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up the interval when the component mounts
    const intervalId = setInterval(() => {
      // Update the seconds state every second
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only on mount and unmount

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default Timer;
