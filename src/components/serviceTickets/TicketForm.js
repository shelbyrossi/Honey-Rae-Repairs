import React, { useState } from "react"
import { useHistory } from "react-router-dom"


// <div>
//     <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
// </div>

export const TicketForm = () => {
    // creating hook for transient state of ticket info
    const [ticket, update] = useState({
        description: "",
        emergency: false
    });


    const history = useHistory()

    const submitTicket = (evt) => {
        // preventing default behavior of submiting ticket
        evt.preventDefault()
        const newTicket = {
            // from state to send to API
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            dateCompleted: ""


        }

        // send above object to API
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
            }
            return fetch("http://localhost:8088/serviceTickets", fetchOption)
            .then(() => {
                history.push("/serviceTickets")
                // programmatically changing url to bring user back to tickets
                // pushing to browser history
        })
    }

    
    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        // copying existing state with spread operator
                        // brand new object to modify state 
                        // updated when user interacts 
                        onChange={
                            (evt) => {

                                const copy = { ...ticket }
                                copy.description = evt.target.value
                                update(copy)

                            }
                        }

                    />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                    // copying existing state for state object that is updated when user interacts
                        onChange={
                            (evt) => {
                                const copy = { ...ticket }
                                copy.emergency = evt.target.checked
                                update(copy)
                            }
                        }
                        type="checkbox"/>
                    
                </div>
            </fieldset>
            <button onClick={submitTicket} className="btn btn-primary">
            
                        Submit Ticket
            </button>
        </form>
    )
}