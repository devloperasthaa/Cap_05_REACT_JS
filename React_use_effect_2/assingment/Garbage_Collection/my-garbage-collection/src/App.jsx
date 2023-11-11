import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up the interval when the component mounts
    const intervalId = setInterval(() => {
      // Update the count every second
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only on mount and unmount

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
      {/* You can add more UI components related to the timer if needed */}
    </div>
  );
};

const ParentComponent = () => {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    // Clear the interval when the timer is hidden
    return () => setShowTimer(false);
  }, []);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showTimer}
          onChange={() => setShowTimer((prevShowTimer) => !prevShowTimer)}
        />
        Show Timer
      </label>

      {showTimer && <Timer />}
    </div>
  );
};

export default ParentComponent;
