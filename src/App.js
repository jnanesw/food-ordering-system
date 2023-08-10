import './App.css';
import Navbar from './Components/Navbar';
import DataRequested from './Pages/DataRequested';
// import { CartProvider } from './CartContext';
function App() {
  return (
      <div className="font-sora bg-gradient-to-r from-gray-300 to-custom bg-cover h-full w-full">
        <div>
          <Navbar />
          <DataRequested />
        </div>
      </div>
  )
}

export default App
