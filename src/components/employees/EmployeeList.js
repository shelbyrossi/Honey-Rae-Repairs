import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    // declaring variable "employees" that defines state
    // declaring variable "assignemployees" that defines function that will modify state/set value of employees
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED
    const [employees, changeEmployee] = useState([])
    const [specialties, setSpecial] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                // function that takes a function and array as arguments & runs code when state changes (event listener)
                .then(res => res.json())

                // you have final array of customers defined in line 7
                .then((employeesFromAPI) =>
                //  // function established in state variable - single argument is new state/API state
                {
                    changeEmployee(employeesFromAPI)
                })
        },
        []
    )




    useEffect(() => {
        // use .map() to get the specialty of each employee
        const specialities = employees.map(employee => employee.specialty)
        // update a state variable to be a comma-seperated string
        setSpecial(specialities.join(", "))
    }, [employees])




    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>
            <div>
                Specialties: {specialties}
            </div>
            {
                // iterate employes array and convert to objects to JXS (converstion = .map())
                employees.map(
                    // // parameter to capture each indivual employeeObj as iterates
                    (employee) => {
                        // // uniquely identify <h2> with a key, use .id since unique identifier
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}