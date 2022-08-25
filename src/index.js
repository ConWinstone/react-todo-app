import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//component file
import TodoContainer from './components/TodoContainer'
import Navbar from './components/Navbar'

//stylesheet
import './App.css'
import NotMatch from './Pages/NotMatch'
import About from './Pages/About'
import SinglePage from './Pages/SinglePage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:slug" element={<SinglePage />} />
        <Route path="/*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
