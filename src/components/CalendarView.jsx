// CalendarView.js

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEventContext } from '../context/EventContext';
import '../App.css';
const CalendarView = () => {
  const { state } = useEventContext();
  const { events } = state;

  const getEventsForDate = (date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.dateTime);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const formatEvents = (date) => {
    const eventsForDate = getEventsForDate(date);
    return eventsForDate.map((event) => (
      <div className='dd' key={event.id}>
        <strong>{event.eventName}</strong>
        <p>{event.description}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2 className='cal'>Calendar View</h2>
      <Calendar
        tileContent={({ date }) => formatEvents(date)}
      />
    </div>
  );
};

export default CalendarView;



// // CalendarView.js
// import { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { useEventContext } from '../context/EventContext';

// const CalendarView = () => {
//   const { state } = useEventContext();
//   const { events } = state;

//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]);

//   useEffect(() => {
//     // Filter events for the selected date
//     const filteredEvents = events.filter((event) => {
//       const eventDate = new Date(event.dateTime);
//       return (
//         eventDate.getDate() === selectedDate.getDate() &&
//         eventDate.getMonth() === selectedDate.getMonth() &&
//         eventDate.getFullYear() === selectedDate.getFullYear()
//       );
//     });
//     setEventsForSelectedDate(filteredEvents);
//   }, [selectedDate, events]);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div>
//       <h2>Calendar View</h2>
//       <div className="calendar-container">
//         <Calendar
//           value={selectedDate}
//           onClickDay={handleDateClick} // Handle date click events
//         />
//       </div>
//       <div className="events-for-selected-date">
//         <h3>Events for {selectedDate.toDateString()}:</h3>
//         <ul>
//           {eventsForSelectedDate.map((event) => (
//             <li key={event.id}>
//               <strong>{event.eventName}</strong> - {event.description}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CalendarView;
