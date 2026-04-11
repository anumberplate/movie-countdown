import img from "./assets/posterimg.jpg"
export default function Photos(){
  return(
    <>
    <h2 className="H2">Synopsis</h2>
    <section className="photo">
      <img src={img} alt="" />
      <p className="P">
        After the record-breaking global success of Spider-Man: No Way Home, 
        Spider-Man: Brand New Day marks an entirely new chapter for Peter Parker and Spider-Man.
        Four years have passed since the events of No Way Home, and Peter is now an adult living entirely alone, 
        having voluntarily erased himself from the lives and memories of those he loves. 
        Crime-fighting in a New York that no longer knows his name, 
        he's devoted himself entirely to protecting his city — 
        a full-time Spider-Man — but as the demands on him intensify,
        the pressure sparks a surprising physical evolution that threatens his existence,
        even as a strange new pattern of crimes gives rise to one of the most powerful threats he has ever faced.
        <span style={{marginTop:"2rem"}}><a href="https://spidermanbrandnewday.movie/synopsis/" target="_blank">See more on official website</a></span>
      </p>
      
    </section>
   
    </>
  )
}