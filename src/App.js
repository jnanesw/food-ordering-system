import './App.css';
import Navbar from './Components/Navbar';
import DataRequested from './Pages/DataRequested';
// import { CartProvider } from './CartContext';
function App() {
  return (
      <div className="font-sora">
        <div>
          <Navbar />
          <DataRequested />
        </div>
      </div>
  )
}

export default App
