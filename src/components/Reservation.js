import BookingForms from "./BookingForms";
import { useReducer } from "react";

export const initializeTimes = () =>{
  return [  
    '17:00', 
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]
}

export const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "set_times":
      return action.payload;
    default:
      return state;
  }
};

const Reservation = () =>{

  const [availableTime, dispatch] = useReducer(availableTimesReducer, initializeTimes())
  
  const updateTimes = (newTimes) =>{
    dispatch({type:'set_times', payload: newTimes})
  }

  return(
    <>
      <BookingForms availableTime={availableTime} updateAvailableTime={updateTimes}/>
    </>
  )
}

export default Reservation;