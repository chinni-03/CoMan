import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import AddContact from './components/AddContact';
import ShowContact from './components/ShowContact';
import EditContact from './components/EditContact';
import AllContacts from './components/AllContacts';
import Action from './components/Action';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/add-contact' element={ <AddContact /> } />
          <Route path='/all-contacts' element={ <AllContacts /> } />
          <Route path='/show-contact/:id' element={<ShowContact />} />
          <Route path='/edit-contact/:id' element={<EditContact />} />
          <Route path='/action' element={<Action />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
