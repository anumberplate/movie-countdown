import img from './assets/location.svg'
import img2 from "./assets/time.svg"
import img1 from "./assets/cinema/cinema1.jpg"
import img5 from "./assets/cinema/cinema2.jpg"
import img3 from "./assets/cinema/cinema3.jpg"
import img4 from "./assets/cinema/cinema4.jpg"

export default function Details(){
  const list = [img1,img5,img3,img4]
  return(
     <section className="details">
        <h2 style = {{marginBottom:"3rem"}}>Venue</h2>
        <div style = {{marginBottom:"5px"}}className = "location">
          <div>
            <img src={img} alt="" />
          </div> 
          <p>Westgate Cinema, Westgate Shopping Mall, Westlands, Nairobi</p>
        </div>
        <div style = {{marginBottom:"2rem"}} className = "location">
            <img src={img2} alt="" />
            <p>From Afternoon</p>
        </div>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.7981699005086!2d36.80074887311109!3d-1.2567655355906864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1712aac1c383%3A0x45a58490f4596a4d!2sWestgate%20Cinema!5e1!3m2!1sen!2ske!4v1775898640075!5m2!1sen!2ske"  
        style={{border:0, width:"100%", height:"400px"}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <div className = "img-container">
          {list.map(item => 
            <img src = {item}  />
          )}
        </div>
        
        <p style = {{fontSize:"0.6rem", marginBottom:"2rem" , marginTop: "4rem", textAlign:"center", color:"rgb(200,200,200)"}}>
          *This venue may be changed
        </p>
     </section>
  )
}