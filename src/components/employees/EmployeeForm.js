import React, { useState } from "react"
import { useHistory } from "react-router-dom"


// <div>
//     <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
// </div>

export const EmployeeForm = () => {
    // creating hook for transient state of ticket info
    const [employeeInfo, update] = useState({
        id: 3,
        name: "",
        specialty: ""
    });


    const history = useHistory()

    const submitEmployee = (evt) => {
        // preventing default behavior of submiting ticket
        evt.preventDefault()
        const newEmployee = {
            // from state to send to API
          
            name: employeeInfo.name,
            specialty: employeeInfo.specialty



        }

        // send above object to API
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
            }
            return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
                // programmatically changing url to bring user back to tickets
                // pushing to browser history
        })
    }

    
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">HIRING FORM</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Full Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="please provide employee full name"
                        // copying existing state with spread operator
                        // brand new object to modify state 
                        // updated when user interacts 
                        onChange={
                            (evt) => {
                                const copy = { ...employeeInfo}
                                copy.name = evt.target.value
                                update(copy)

                            }
                        }

                    />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Specialty:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="please provide employee specialty"
                        // copying existing state with spread operator
                        // brand new object to modify state 
                        // updated when user interacts 
                        onChange={
                            (evt) => {
                                const copy = { ...employeeInfo }
                                copy.specialty = evt.target.value
                                update(copy)

                            }
                        }
                        />
                </div>
            </fieldset>
            <button onClick={submitEmployee} className="btn btn-primary">
            
                        Finish Hiring
            </button>
        </form>
    )
                    }