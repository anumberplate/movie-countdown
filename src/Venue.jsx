import React, {useRef, useState} from "react"

export default function venue(){
  return(
      <>
      <section className = "venue">
          <h2>Official trailer</h2>
          <iframe 
           className="video"
           src="https://www.youtube.com/embed/aBlsrtxuwss?si=TKw1P3AG22fkuKPq"
           title="YouTube video player" 
           frameBorder="0"
           allow="accelerometer; autoplay;\ clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerPolicy="strict-origin-when-cross-origin" 
           allowFullScreen>
          </iframe>
      </section>
      <section className = "jk">
        <div class = "para">
          <p>
            Spider-Man: Brand New Day is an upcoming American superhero
            film based on the Marvel Comics character Spider-Man. Produced by Columbia Pictures, Marvel Studios, and Pascal Pictures, and distributed by Sony Pictures Releasing, 
            it is intended to be the 38th film in the Marvel Cinematic Universe 
            (MCU) and the fourth film in the MCU Spider-Man film series following Spider-Man: No Way Home (2021). 
            The film is being directed by Destin Daniel Cretton, written by Chris McKenna and Erik Sommers,
            and stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Sadie Sink, Jacob Batalon, 
            Jon Bernthal, Tramell Tillman, Michael Mando, and Mark Ruffalo.
          </p>
          <p><a href="https://en.wikipedia.org/wiki/Spider-Man:_Brand_New_Day" target="_blank">See more on Wikipedia</a></p>
        </div>
      </section>
      
      </>
  )

}