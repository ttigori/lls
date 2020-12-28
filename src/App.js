import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Classroom from './classroom/Classroom';
import StudentCreate from './components/StudentCreate';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Route path="/" exact component={Classroom} />
        <Route path="/create" exact component={StudentCreate} />
      </BrowserRouter>

    </div>
  );
}

export default App;
