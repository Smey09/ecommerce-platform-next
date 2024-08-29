"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set the target date and time (October 1, 2024, at 00:00:00)
  const targetDate = new Date("2024-10-01T00:00:00");

  // Initialize state to store remaining time
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate the remaining time
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  useEffect(() => {
    // Set interval to update countdown every second
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to format time with leading zero if necessary
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex items-center space-x-2 text-center">
      {/* Days */}
      <div className="flex flex-col items-start">
        <p className="text-xs font-sans">Days</p>
        <p className="text-xl font-bold">{formatTime(timeRemaining.days)}</p>
      </div>
      <span className="text-xl font-bold text-orange-500">:</span>
      {/* Hours */}
      <div className="flex flex-col items-start">
        <p className="text-xs font-sans">Hours</p>
        <p className="text-xl font-bold">{formatTime(timeRemaining.hours)}</p>
      </div>
      <span className="text-xl font-bold text-orange-500">:</span>
      {/* Minutes */}
      <div className="flex flex-col items-start">
        <p className="text-xs font-sans">Minutes</p>
        <p className="text-xl font-bold">{formatTime(timeRemaining.minutes)}</p>
      </div>
      <span className="text-xl font-bold text-orange-500">:</span>
      {/* Seconds */}
      <div className="flex flex-col items-start">
        <p className="text-xs font-sans">Seconds</p>
        <p className="text-xl font-bold">{formatTime(timeRemaining.seconds)}</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
