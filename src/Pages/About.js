import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'

import SinglePage from './SinglePage'

export default function About() {
  console.log(useParams())
  return (
    <div>
      <ul>
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/:slug" element={<SinglePage />} />
      </Routes>
    </div>
  )
}
