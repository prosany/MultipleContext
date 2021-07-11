import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import { AdminContextProvider, ContextProvider } from './Context/Context';

function App() {
  document.title = 'Multi Context';
  return (
    <>
      <ContextProvider>
        <Home />
      </ContextProvider>
      <AdminContextProvider>
        <About />
      </AdminContextProvider>
    </>
  );
}

export default App;
