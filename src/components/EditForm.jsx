// EditEventForm.jsx
import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEventContext } from '../context/EventContext';

const EditForm = () => {
  const { state, dispatch } = useEventContext();
  const { events } = state;
  const { id } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    eventName: '',
    description: '',
    dateTime: '',
    duration: '',
  });
console.log(setEventData)
  useEffect(() => {
    // Check if an event ID is provided in the URL
    if (id) {
      // Find the event to edit by its ID
      const eventToEdit = events.find((event) => event.id === id);
      if (eventToEdit) {
        setEventData(eventToEdit);
      } else {
        // Redirect to the event list if the event with the given ID is not found
        navigate('/list');
      }
    }
  }, [id, events, navigate]);

  const { eventName, description, dateTime, duration } = eventData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleEditEvent = () => {
    // Validate the edited event data here if needed

    // Dispatch the EDIT_EVENT action to update the event
    dispatch({ type: 'EDIT_EVENT', payload: { id, eventName, description, dateTime, duration } });

    // Redirect to the event list after editing
    navigate('/list');
  };

  return (
    <div>
      <h2>Edit Event</h2>
      <form>
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="dateTime">Date & Time:</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={dateTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration (in hours):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={duration}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="button" onClick={handleEditEvent}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditForm;
