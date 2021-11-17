// CONTROLLER COMPONENT - responsibilty is to determine what view of app should be rendered depending on url

import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

// listens for change (click of hyperlink) and renders appropriate component 
export const ApplicationViews = () => {
    return (
        <>
        {/* when the url is customers, display CustomersList  */}
            <Route exact path="/customers">
                {/* child */}
            <CustomerList/>

            </Route>
        {/* when the url is employees, display EmployeeList */}
            <Route exact path="/employees">
                {/* child */}
                <EmployeeList/>
            </Route>

           
        {/* when the url is employees, display EmployeeList */}
            <Route exact path="/serviceTickets">
                {/* child */}
                <TicketList/>
            </Route>

        </>
    )
}


