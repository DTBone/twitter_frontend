import './App.css';

import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="Twitter">
      <Routes>
        <Route path="/*" element={true ? <HomePage /> : <Authentication />}>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
