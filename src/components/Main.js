import heroM from '../images/hero-m.jpg'
import heroD from '../images/hero-d.jpg'
import {Specials} from '../constants/Specials'; 
import {Testimonials} from '../constants/Testimonials'
import aboutA from '../images/about-1.jpg'
import aboutB from '../images/about-2.jpg'
import '../css/Main.css'

const Main = () => {
  return(
    <main>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h4 className='subtitle hero__content--subtitle'>Little Lemon</h4>
            <h1 className='title  hero__content--title'>Crafted with Passion <br/> Served with Love</h1>
            <p>Join us and taste perfection in every bite</p>
            <a className='cta hero__cta' href="/Reservation" title="Reserve a table now!">Reserve a Table</a>
          </div>
 

          <div className="hero__image">
            <picture>
              <source srcSet={heroD} media='(min-width:767px)'/>
              <img src={heroM} alt="Reserve a Table hero image"/>
            </picture>
          </div>
        </div>
      </section>

      <section className="menu">
        <div className="menu__wrapper container">
          <div className='menu__header'>
            <h2 className='section--title'>Specials</h2>
            <a className='cta menu__cta--primary' href='/OnlineOrder'>Online Menu</a>
          </div>
          <div className="menu__items">
            {Specials.map(special => {
              return(
                <article className='menu__item'>
                  <div className="menu__item__wrapper">
                    <img src={special.img} alt={special.alt}/>
                    <p className='menu__item__price'>${special.price}</p>
                  </div>
                  <div className='menu__item__content'>
                    <h3 className='menu__item__pTitle'>{special.name}</h3>
                    <p>{special.desc}</p>
                    <button className='cta'>Order a delivery </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonial__wrapper container">
          <div className='testimonial__header'>
            <h2 className='section--title'>Testimonials</h2>
          </div>
          <div className='testimonials__review'>
            {Testimonials.map(t => {
                return(
                  <article className='testimonial'>
                  <div className='testimonial__rating'>{t.rating}</div>
                  <div className='testimonial__info'>
                    <img src={t.img} alt='Reviewer' /> 
                    <h5>{t.name}</h5>
                  </div>
                  <p>{t.review}</p>
                </article>
                )
              })}
            </div>
        </div>
      </section>

      <section className="about">
        <div className="about__wrapper container">
          <div className="about__content">
            <h2>Little lemon</h2>
            <h4>Chicago</h4>
            <p>
              Lorem Ipsum sit dolor amet, Lorem Ipsum sit dolor amet,Lorem Ipsum sit dolor amet, Lorem Ipsum sit dolor amet,Lorem Ipsum sit dolor amet, Lorem Ipsum sit dolor amet
            </p>
          </div>

          <div className="about__image">
            <img src={aboutA} alt="About Us image"/>
            <img src={aboutB} alt="About Us image"/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main;