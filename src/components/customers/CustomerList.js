
import React, { useEffect, useState } from "react"

// customerList is now called "COMPONENT"

export const CustomerList = () => {
    // declaring variable "customers" that DEFINES STATE
    // declaring variable "assignCustomers" that defines function that will MODIFY STATE
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED- STORES STATE
    const [customers, assignCustomers] = useState([])
    const [TotalCustomerMessage, updateMessage] = useState("")


    useEffect(
        // function that takes a function and array as arguments & runs code when state changes (event listener)
        () => {
            fetch("http://localhost:8088/customers")
                // fetching data from the API and parsing into application state
                .then(res => res.json())
                // you have final array of customers defined in line 9
                .then(
                    // 
                    (customers) => {
                        // function established in state variable - single argument is new state/API state
                        assignCustomers(customers)
                    }
                )
        },
        // leave DEPENDANCY ARRAY empty, or infinite loop
        []
    )

    useEffect(
        // REACTING TO CHANGES IN TRANSIENT STATE
        // two parameters - what should run (function) array holding state variables of what it should run
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")

            }
            else {
                updateMessage(`You have ${customers.length} customers`)

            }

        },
        // observing for changes in transient state (customers array)
        [customers]

    )

    return (
        // <> Fragment - putting all return elements into one JXS element 
        <>

                <div>{TotalCustomerMessage}</div>

            {
                // iterate customers and convert to objects to JXS (converstion = .map())
                customers.map(
                    // parameter to capture each indivual customerObj as iterates
                    (customerObj) => {
                        // uniquely identify <h2> with a key, use .id since unique identifier
                        return <h2 key={`customer--${customerObj.id}`}>{customerObj.name}</h2>
                    }
                )
            }
        </>
    )

}
