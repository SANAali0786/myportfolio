import image from '../img.webp'
import './Hero.css';
function Hero({}){
    return (
       
          <section id="home">
            <div className="hero-text">
                <p className='hero-greeting'>Hello I'm </p>
                <h1 className='hero-name'>Sana Praveen</h1>
            <p className='hero-role'>Full-stack<br></br> Developer</p>
            <p className='hero-intro'>Building seamless, scalable web applications by bridging the gap between robust backend logic and intuitive frontend design.</p>
            <button className='btn1' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
    View Projects
</button>

<button className='btn2' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
    Contact Me
</button>
            </div>
            <div className="hero-img">
           <img src= { image } alt='Sana Praveen'/>
            </div>
          </section>

       
    )
}
export default Hero;