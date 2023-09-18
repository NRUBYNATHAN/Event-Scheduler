// EventContext.js
import  { createContext, useContext, useReducer } from 'react';
// Define the initial state
const initialState = {
   
  events: [],
};

// Create the context
const EventContext = createContext();

// Define actions
const ADD_EVENT = 'ADD_EVENT';
const EDIT_EVENT = 'EDIT_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';

const eventReducer = (state, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return { ...state, events: [...state.events, action.payload] };

  



    case DELETE_EVENT:
      const updatedEvents = state.events.filter(
        (event) => event.id !== action.payload
      );
      return { ...state, events: updatedEvents };

      case EDIT_EVENT:
        const updatedEventIndex = state.events.findIndex((event) => event.id === action.payload.id);
        if (updatedEventIndex !== -1) {
          const updatedEvents = [...state.events];
          updatedEvents[updatedEventIndex] = action.payload;
          return { ...state, events: updatedEvents };
        }
        

        
    default:
      return state;
  }
};

// Create the EventProvider component
export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);

  return (
    <EventContext.Provider value={{ state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to access the context
export const useEventContext = () => {
  return useContext(EventContext);
};



