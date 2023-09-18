// EventList.j
import { useNavigate } from 'react-router-dom';
import { useEventContext } from '../context/EventContext';
import "./EventList.css";
import Button from '@mui/material/Button';
const EventList = () => {
  const { state, dispatch } = useEventContext();
  const { events } = state;
const navigate=useNavigate();
  // const handleEdit = (event) => {
  //   // Set the form fields with the event data for editing
  //   dispatch({
  //     type: 'EDIT_EVENT',
  //     payload: event,
  //   });
  // };

  const handleDelete = (id) => {
    // Delete the event by its ID
    dispatch({
      type: 'DELETE_EVENT',
      payload: id,
    });
  };


  return (
    <div className='eventlist'>
      <h2 className='listhead'>Event List</h2>
    
      <ul>
        {events.map((event) => (
          <li className='list' key={event.id}>
            <strong><span className='names'>Event Name : </span>{event.eventName}</strong>
            <p><span className='names'>Description : </span>{event.description}</p>
            <p><span className='names'>Date & Time: </span>{event.dateTime}</p>
            <p><span className='names'>Duration: </span>{event.duration} hours</p>
            <div className='btns'>
            <Button variant='contained'onClick={()=>navigate(`/edit/${event.id}`)}>Edit</Button>
            <Button variant='contained' onClick={() => handleDelete(event.id)}>Delete</Button>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
