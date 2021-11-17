
import React from "react"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

export const Repairs = () => {
   

    return (
// <> Fragment - putting all return elements into one JXS element 
        <> 
            <h1>Honey Rae's Repair Shop</h1>
                <CustomerList/>
                <h1>Employee List</h1>
                <EmployeeList/>

                <h2>Service Tickets</h2>
                <TicketList/>

        
        </>
    )

}
