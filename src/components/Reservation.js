import BookingForms from "./BookingForms";
import { useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from "../utils/Fetch";
import { useNavigate } from "react-router-dom";

export const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "set_times":
      return action.payload;
    default:
      return state;
  }
};



const Reservation = () =>{

  const [availableTime, dispatch] = useReducer(availableTimesReducer, [])

  const initializeTimes = () =>{
    const times = fetchAPI(new Date());
    dispatch({type:'set_times', payload: times})
  }

  useEffect(() => {
    initializeTimes();
  }, [])

  const updateTimes = (newTimes) =>{
    dispatch({type:'set_times', payload: newTimes})
  }

  const navigate = useNavigate();

  const SubmitForm = (data) => {
    if(submitAPI(data)) navigate('/ConfirmedBooking');
  }

  return(
    <>
      <BookingForms availableTime={availableTime} updateAvailableTime={updateTimes} fetch={fetchAPI} onSubmit={SubmitForm}/>
    </>
  )
}

export default Reservation;