// CONTROLLER COMPONENT - responsibilty is to determine what view of app should be rendered depending on url

import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"
import {TicketForm} from "./serviceTickets/TicketForm"
import { EmployeeForm } from "./employees/EmployeeForm"

// listens for change (click of hyperlink) and renders appropriate component 
export const ApplicationViews = () => {
    return (
        <>
            {/* when the url is customers, display CustomersList  */}
            <Route exact path="/customers">
                {/* child */}
                <CustomerList />

            </Route>
            {/* when the url is employees, display EmployeeList */}
            <Route exact path="/employees">
                {/* child */}
                <EmployeeList />
            </Route>


            {/* when the url is employees, display TicketList */}
            <Route exact path="/serviceTickets">
                {/* child */}
                <TicketList />
            </Route>

            {/* when the url is employees, display TicketForm */}
            <Route  path="/tickets/create">
                {/* child */}
                <TicketForm />
            </Route>

            {/* when the url is employees, display EmployeeForm */}
            <Route exact path="/employees/create">
                {/* child */}
                <EmployeeForm />
            </Route>

          
        </>
    )
}


