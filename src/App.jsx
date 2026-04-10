import image1 from "./assets/spiderman.jpg"
import image2 from "./assets/images2.jpg"
import image3 from "./assets/images.jpg"
import React, { useState, useEffect } from "react"

function App() {
  const targetDate = '2026-07-31T00:00:00'
  function padZero(time){
    if (time < 10){
      return ("0" + time)
    } else {
      return time
    }
  }

  const calculateTimeLeft = (targetDate) => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

   

    if (difference > 0) {
      timeLeft = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;

  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);

  }, [targetDate]);

  return(
  <section>
    <img src={image2} alt="" />
    <div className = "bg-transparent">
    
      <div className = "movie-image">
        <img src={image1} alt="Image of Spiderman - A brand New Day" /> 
      </div>
    
      <div className = "countdown-container">
        {timeLeft.months !== undefined ? (
          <>
              <div className = "time-box">
                <h2>Months</h2>
                <p>{padZero(timeLeft.months)}</p>
              </div>

              <div className = "time-box">
                <h2>Days</h2>
                <p>{padZero(timeLeft.days)}</p>
              </div>

              <div className = "time-box">
                <h2>Hours</h2>
                <p>{padZero(timeLeft.hours)}</p>
              </div>

              <div className = "time-box">
                <h2>Minutes</h2>
                <p>{padZero(timeLeft.minutes)}</p>
              </div>

              <div className = "time-box">
                <h2>Seconds</h2>
                <p>{padZero(timeLeft.seconds)}</p>
              </div>
              
          </>
        ) : (
          <span>Time's up!</span>
        )}
      </div>
      <p className="p-footer-text">Movie Releases on 31st July 2026</p>

    </div>
  </section>
  )
}

export default App
