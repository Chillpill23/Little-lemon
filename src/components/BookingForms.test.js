import BookingForms from "./BookingForms";
import Reservation from "./Reservation";
import {render, screen, fireEvent, waitFor} from "@testing-library/react"
import { initializeTimes, availableTimesReducer }  from "./Reservation"

const availableTimes = ['17:00', '17:30'];

const expectedState = [  
  '17:00', 
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00'
]

const result = initializeTimes();

test("Test Initialized state if it matches the expected state", ()=> {
  render(<BookingForms availableTime={availableTimes} />)
  expect(result).toEqual(expectedState);
})

test("updateTimes returns the same value provided in the state" , () =>{
  render(<Reservation/>);
  const currentState = ['17:00', '18:00'];
  const newTimes = ['1:00', '2:00'];
  const action = {type: 'set_times', payload: newTimes}
  const result = availableTimesReducer(currentState, action)

  expect(result).toEqual(newTimes);
})



