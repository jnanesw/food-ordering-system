import './App.css';
import Navbar from './Components/Navbar';
import DataRequested from './Pages/DataRequested';
// import bg from ""
function App() {
  return (
    <div className="bg-[rgba(216,220,229,255)] bg-opacity-80 w-full h-screen bg-cover bg-center">
      <Navbar />
      <DataRequested />
    </div>
  )
}

export default App
