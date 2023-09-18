
import './App.css';
import { EventProvider } from './context/EventContext';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import CalendarView from './components/CalendarView';
import { Route, Routes } from 'react-router-dom';
import EditForm from './components/EditForm';


function App() {
  return (
    <EventProvider>
      <Routes>
      <Route  path="/"  element={<EventForm />} />
      <Route path="/edit/:id" component={<EditForm/>} />
      <Route path="/list" element={ 
        <div className='lists'>
          <EventList/>
          <CalendarView/>
        </div>}>
      </Route>

       </Routes>

    </EventProvider>
  );
}

export default App;




// "https://6507b43b3a38daf4803faa58.mockapi.io/event-sheduler"
