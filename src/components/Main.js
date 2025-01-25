import chefB from '../images/chefB.jpg'
import {Specials} from '../constants/Specials'; 
import {Testimonials} from '../constants/Testimonials'
import aboutA from '../images/about-1.jpg'
import aboutB from '../images/about-2.jpg'

const Main = () => {
  return(
    <main>
      <section className="hero">
        <div className="hero__content">
          <h2>Little lemon</h2>
          <h4>Chicago</h4>
          <p>Lorem Ipsum sit dolor amet, Lorem Ipsum sit dolor amet</p>
          <a className='cta' href="/Reservation" title="Reserve a table now!">Reserve a Table</a>
        </div>

        <div className="hero__image">
          <img src={chefB} alt="Reserve a Table Hero image"/>
        </div>
      </section>

      <section className="menu">
        <div className='menu__header'>
          <h2>Specials</h2>
          <a className='cta menu__cta' href='/OnlineOrder'>Online Menu</a>
        </div>
        <div className="menu__items">
          {Specials.map(special => {
            return(
              <article className='menu__item'>
                <img src={special.img} alt={special.alt}/>
                <div className='menu__content'>
                  <div className="menu__item__header">
                    <h3>{special.name}</h3>
                    <p>{special.price}</p>
                  </div>

                  <p>{special.desc}</p>
                  <button>Order a delivery </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="testimonials">
          {Testimonials.map(t => {
            return(
              <article className='testimonal'>
              <div className='testimonial__rating'>{t.rating}</div>
              <div className='testimonial__wrapper'>
                <img src={t.img} alt='Reviewer' /> 
                <h3>{t.name}</h3>
              </div>
              <p>{t.review}</p>
            </article>
            )
          })}

      </section>

      <section className="about">
        <div className="about__content">
          <h2>Little lemon</h2>
          <h4>Chicago</h4>
          <p>Lorem Ipsum sit dolor amet, Lorem Ipsum sit dolor amet</p>
          <a className='cta' href="/Reservation" title="Reserve a table now!">Reserve a Table</a>
        </div>

        <div className="about__image">
          <img src={aboutA} alt="About Us image"/>
          <img src={aboutB} alt="About Us image"/>
        </div>
      </section>
    </main>
  )
}

export default Main;