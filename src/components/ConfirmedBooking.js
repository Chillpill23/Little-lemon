import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const ConfirmedBooking = () => {
  return (
    <div className='confirmed'>
      <FontAwesomeIcon icon={faCheckCircle} className='confirmed__icon'/>
      <h4>Booking has been confirmed</h4>
    </div>
  )
}
