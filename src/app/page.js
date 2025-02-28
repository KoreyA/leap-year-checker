"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

export default function LeapYearChecker() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0;
  const [isLeapDay, setIsLeapDay] = useState(false);

  useEffect(() => {
    const today = new Date();
    setIsLeapDay(today.getMonth() === 1 && today.getDate() === 29); // Check if Feb 29
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
      <Head>
        <title>Leap Year Checker</title>
        <meta name="description" content="Check if the current year is a leap year" />
      </Head>

      {/* Leap Year Message */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center z-10">
        <h1 className="text-4xl font-bold">Leap Year Checker</h1>
        <p className="mt-4 text-lg">
          The year <span className="font-semibold">{currentYear}</span> {isLeapYear ? "is" : "is not"} a leap year.
        </p>
      </div>

      {/* Celebration Effect if it's February 29th */}
      {isLeapDay && (
        <>
          {/* Celebratory Text */}
          <div className="absolute top-20 text-center text-4xl font-bold text-yellow-400 z-10 animate-bounce">
            🎉 It's February 29th! Once in 4 years! 🎉
          </div>

          {/* Falling Emoji Animation */}
          {[...Array(20)].map((_, index) => (
            <span
              key={index}
              className="emoji absolute text-4xl"
              style={{
                left: `${Math.random() * 100}vw`, // Random horizontal position
                top: `-${Math.random() * 20}vh`, // Start slightly above viewport
                animationDuration: `${Math.random() * 3 + 2}s`, // Random animation speed
                animationDelay: `${Math.random() * 2}s`, // Random start delay
              }}
            >
              🎉
            </span>
          ))}
        </>
      )}

      {/* Styles for Falling Animation */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .emoji {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
}
