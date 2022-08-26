import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <NavLink to="about-app">About App</NavLink>
        </li>
        <li>
          <NavLink to="about-author">About Author</NavLink>
        </li>
      </ul>
    </div>
  )
}
