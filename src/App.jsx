import './App.css'
import {Header} from "./Componets/Header.jsx"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Task1 from "./Componets/Task1.jsx"
import Task2 from "./Componets/Task2.jsx"
import Task3 from "./Componets/Task3.jsx"
import Task4 from "./Componets/Task4.jsx"

function App() {
 

  return (
    <>
      
      <Router>
         <Header />
        <Routes>
        
          <Route path='/' element={<Task1 />} />
          <Route path='/task2' element={<Task2 />} />
          <Route path='/task3' element={<Task3 />} />
          <Route path='/task4' element={<Task4 />} />
        </Routes>
      </Router>


    </>
  )
}

export default App
