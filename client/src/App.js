import { Routes, Route } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<CustomerRouters/>} />
      </Routes>
    </>
  );
}

export default App;