// EventForm.js
import  { useState } from 'react';
import { useEventContext } from '../context/EventContext';
import {  useNavigate } from 'react-router-dom';
import "./EventForm.css";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
const EventForm = () => {
    const navigate = useNavigate();
  const { dispatch } = useEventContext();

  const [eventData, setEventData] = useState({
    id: '',
    eventName: '',
    description: '',
    dateTime: '',
    duration: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventData.id) {
      // Editing an existing event
      dispatch({
        type: 'EDIT_EVENT',
        payload: eventData,
      });
    } else {
      // Adding a new event
      dispatch({
        type: 'ADD_EVENT',
        payload: {
          ...eventData,
          id: Date.now(),
        },
      });
    }

    // Clear the form fields
    setEventData({
      id: '',
      eventName: '',
      description: '',
      dateTime: '',
      duration: '',
    });

    navigate("/list")
  };

  return (
    <div className='main' >
      <Card >
        <CardContent>
      <form className='eventform' onSubmit={handleSubmit}>
        <label className='head1'>Create Event</label>
        <input  type="hidden" name="id" value={eventData.id} />
        <div>
          <label  className='input' htmlFor="eventName">Event Name:</label>
          <TextField
         
           variant="outlined"
            type="text"
            id="eventName"
            name="eventName"
            value={eventData.eventName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label  className='input' htmlFor="description">Description:</label>
          <TextField
                className='input'
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="filled"
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
            required
          ></TextField>
        </div>
        <div>
          <label  className='input' htmlFor="dateTime">Date & Time:</label>
          <TextField
          className='input'
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={eventData.dateTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label  className='input' htmlFor="duration">Duration (in hours):</label>
          <TextField
          className='input'
            type="number"
            id="duration"
            name="duration"
            value={eventData.duration}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='btn'>
        <Button  variant="contained" type="submit" >
      Create Event
          
        </Button>
        </div>
        
      </form>
      </CardContent>
      </Card>
    </div>
  );
};

export default EventForm;


