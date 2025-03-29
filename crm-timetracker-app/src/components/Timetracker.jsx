import React, { useState } from "react";

export default function Timetracker() {
  const [istracking, setTracker] = useState(false);
  const [startTimestamp, setStartTime] = useState([]);
  const [endTimeStamp, setEndTime] = useState([]);
  const [elapsedTime, setElapsedTime] = useState("");

  const startTracking = () => {
    if (!istracking) {
      const startDay = new Date().toLocaleTimeString().split(":");
      setStartTime([...startDay]);
      setTracker(true);
    } else {
      const endTime = new Date().toLocaleTimeString().split(":");
      setEndTime([...endTime]);
      setTracker(false);

      const difference = calculateTimeDifference(startTimestamp, endTime);
      setElapsedTime(difference);
    }
  };

  const calculateTimeDifference = (start, end) => {
    const startInSeconds =
      parseInt(start[0]) * 3600 + parseInt(start[1]) * 60 + parseInt(start[2]);
    const endInSeconds =
      parseInt(end[0]) * 3600 + parseInt(end[1]) * 60 + parseInt(end[2]);
    const diffInSeconds = Math.abs(endInSeconds - startInSeconds);

    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <button onClick={startTracking}>
        {istracking ? "Stop Tracking" : "Start Tracking"}
      </button>
      <div>Elapsed Time: {elapsedTime}</div>
    </div>
  );
}
