  "use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2025-03-01T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = countdownDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coming-soon">
      <div className="product-box">
        <h1>New Ayurvedic Product Launching Soon!</h1>
        <p>
          We’re bringing you something amazing. Stay tuned for the big reveal!{" "}
          <br />
          developer = Pulindu Seniya
        </p>

        <div className="countdown">
          <div className="time-box">
            {timeLeft.days} <span>Days</span>
          </div>
          <div className="time-box">
            {timeLeft.hours} <span>Hours</span>
          </div>
          <div className="time-box">
            {timeLeft.minutes} <span>Minutes</span>
          </div>
          <div className="time-box">
            {timeLeft.seconds} <span>Seconds</span>
          </div>
        </div>

        <button className="notify-btn">🔔 Notify Me</button>
      </div>
    </div>
  );
}
