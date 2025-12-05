import "../styles.css"
import Header from "./navbar";
import React, { useRef, useEffect } from 'react';


const Dashboard = ({username}) => {
    const Calendar = useRef(null);
    let j = 0;
    const now = new Date();

    useEffect(() => {

        if (j == 0){

        if (Calendar.current) {
            // Create the new DOM element

            for (let i = 1; i<=31; i++){
            const day = document.createElement('div');
            day.className = 'gridbox-item';
            day.innerHTML = `Day ${i}`;
            // const dayNumber = document.createElement('p');
            // dayNumber.textContent =  `Day ${i}`;
            // day.appendChild(dayNumber);

            // Append the new element to the parent
            Calendar.current.appendChild(day);
            }

        }
        j++;
    }

    }, []);

    return (
        
        <div className="dashboard">
            <Header/>
            <br/>
            <br/>

            <h2>Dashboard</h2>
            {/* Option to switch through years / months */}
            <h3>Year: 2025</h3>
            <h3>Month: December</h3>
            <div className="day_names">
                    <h5> Sunday</h5>
                    <h5>Monday</h5>
                    <h5>Tuesday</h5>
                    <h5>Wednesday</h5>
                    <h5>Thursday</h5>
                    <h5>Friday</h5>
                    <h5>Saturday</h5>
                </div>
                

            <div className="gridbox-container" id="Calendar" ref={Calendar}>
            {/* TO DO WORK ON MAKING THIS AN ARRAY OF DAYS */}
                {/* <div className="gridbox-item">Day 1</div> */}


            </div>
        </div>
    )
};

export default Dashboard;