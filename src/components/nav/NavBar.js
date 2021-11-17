import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

// PRESENTATION COMPONENT - DIRECTLY EXPRESSES HTML

export const NavBar = () => {
    return (
        <ul className="navbar">
           <li className="navbar_item active">
               {/* link component 1 job: generate anchor tags 
               "to" attribute renders hyperlink to your DOM when clicked/change url in browser*/}
               <Link className="navbar_link" to="/employees">Employees /</Link>
              
           </li>
           <li className="navbar_item">
               <Link className="navbar_link" to="/customers">Customers /</Link>
           

           </li>
           <li className="navbar_item">
               <Link className="navbar_link" to="/serviceTickets">Service Tickets</Link>
           </li>

        </ul>
        
    )
}