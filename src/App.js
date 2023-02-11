import {Routes, Route  } from 'react-router-dom';
import Form from './components/form/Form';
import Ruleta from './components/ruleta/Ruleta';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/rulet" element={<Ruleta/>} />
      </Routes>
    </div>
  );
}

export default App;
