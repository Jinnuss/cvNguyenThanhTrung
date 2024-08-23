import { Routes, Route } from 'react-router-dom'
import Home from './components/home.js/home';
import LayoutDefault from './components/layout.js/LayoutDefault';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route index element={<Home />} />

        </Route>
      </Routes>


    </>
  );
}

export default App;
