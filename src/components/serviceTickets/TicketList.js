import React, { useEffect, useState } from "react"
import './Tickets.css'


export const TicketList = () => {
    // declaring variable "employees" that defines state
    // declaring variable "assignemployees" that defines function that will modify state/set value of employees
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED
    const [tickets, updateTickets] = useState([])
    

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                // function that takes a function and array as arguments & runs code when state changes (event listener)
                .then(res => res.json())

                // you have final array of customers defined in line 7
                .then((data) => {
                //  // function established in state variable - single argument is new state/API state
                
                updateTickets(data)

                })
        },
        []
    )


    return  (
        <>
        {
            tickets.map(
                (ticket) => {
                    return <div key={`ticket--${ticket.id}`} > 
                    {/* ternary statement - if there is an emergency ticket - give class of emergency else give ticket class */}
                    <p className={ticket.emergency ? `emergency` : `ticket`}>
                        
                    {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                    </p>
                </div>

                }
            )
        }
        </>
    )
}