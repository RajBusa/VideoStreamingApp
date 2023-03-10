import Manu from './components/Manu'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="p-0 m-0 h-100 d-flex flex-column">
      <Navbar />
      <div className="d-flex p-0 h-100">
        <Manu />
        <Wrapper />
      </div>
    </div>
  )
}

export default App
