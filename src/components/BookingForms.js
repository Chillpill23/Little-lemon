import '../css/BookingForms.css'
import { useState } from 'react'

const BookingForms = () => {
  
  const [user, setUser] = useState({
    name:'',
    date:'',
    time:'',
    guest:1,
    occasion:'',
  })

  const [availableTime, setAvailableTime] = useState([
    '17:00', 
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ])

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let message = "";

    switch (name) {
      case "name":
        if (!value.trim() || value.trim().length < 3) message = "Name is required and should be atleast 3 characters";
        break;
      case "date":
        if (!value) message = "Please select a date.";
        break;
      case "time":
        if (!value) message = "Please select a time.";
        break;
      case "guest":
        if (value < 1 || value > 10) message = "Guests must be between 1 and 10.";
        break;
      case "occasion":
        if (!value) message = "Please select an occasion.";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: message,
    }));
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]:value,
    }))

    validateField(name, value);
  }

  const isFormValid = () => {
    if (
      user.name.length >=3
      && user.date
      && user.time
      && user.guest >= 1
      && user.guest <= 10
      && user.occasion
    ) return true;
  }
  

  const clearForm = () => {
      setUser({
        name:'',
        date:'',
        time:'',
        guest:1,
        occasion:'',
      })
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      clearForm();
  }

  return (
    
    <div className='booking'>
      <h2>Online Reservation</h2>
      <h5>Booking request  <span className='highlight'>+63 (975) 1432 703 </span> or fill out the order form</h5>
      <div className='booking__wrapper'>
        <form className='booking__form' onSubmit={handleSubmit}>

          <div className="field">
            <label>Name</label>
            <input name='name' placeholder='ex: Mark' value={user.name} id='name' onChange={handleChange} required/>
            {errors.name && <span className='error'> {errors.name}</span>}
          </div>

          <div className="field">
            <label>Choose a date</label>
            <input name='date' placeholder='DD/MM/YYYY' value={user.date} onChange={handleChange} type='date' id='res-date' />
            {errors.date && <span className='error'> {errors.date}</span>}
          </div>

          <div className="field">
            <label>Choose a Time</label>
            <select name='time' value={user.time} id='res-time' onChange={handleChange}>
              {availableTime.map((time, index) => {
                return (
                  <option key={index} value={time}>{time}</option>
                )
              })}
            </select>
            {errors.time && <span className='error'> {errors.time}</span>}
          </div>

          <div className="field">        
            <label>Number of Guests</label>
            <input name='guest' type='number' placeholder='1' value={user.guest} min='1' max='10' id='guest' onChange={handleChange}/>
            {errors.guest && <span className='error'> {errors.guest}</span>}
          </div>

          <div className="field">
            <label>Occassion</label>
            <select name='occasion' value={user.occasion} onChange={handleChange} id='occasion'> 
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            {errors.occasion && <span className='error'> {errors.occasion}</span>}
          </div>

          <input className='cta' type='submit' value='Reserve a table' disabled={!isFormValid()}/>
        </form>
      </div>
    </div>
  )
}

export default BookingForms