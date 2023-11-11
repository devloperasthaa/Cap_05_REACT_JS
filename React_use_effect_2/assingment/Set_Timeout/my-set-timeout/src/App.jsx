import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up the timer with setTimeout
    const timerId = setTimeout(() => {
      // Update the count after 1 second
      setCount(count + 1);
    }, 1000);

    // Clean up the timer when the component is unmounted or when the count changes
    return () => clearTimeout(timerId);
  }, [count]); // Add 'count' as a dependency to the useEffect

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
    </div>
  );
};

export default Timer;
